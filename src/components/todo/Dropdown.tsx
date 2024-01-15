import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";

type TDropdownProps = {
  title: string;
  options: string[];
  defaultOption: string;
  setOption: (value: string) => void;
  children: ReactNode;
};

const Dropdown = ({
  title,
  options,
  defaultOption,
  setOption,
  children,
}: TDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={defaultOption} onValueChange={setOption}>
          {options.map((option, index) => (
            <DropdownMenuRadioItem
              key={index}
              value={option}
              className="capitalize cursor-pointer"
            >
              {option}
            </DropdownMenuRadioItem>
          ))}
          <DropdownMenuRadioItem
            value={""}
            className="capitalize cursor-pointer"
          >
            All
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
