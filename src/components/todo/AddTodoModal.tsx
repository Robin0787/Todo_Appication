import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { TTodo } from "@/redux/features/todo/todo.interface";
// import { addTodo } from "@/redux/features/todo/todoSlice";
// import { useAppDispatch } from "@/redux/hook";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddTodoMutation } from "@/redux/api/api";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
import { filterByPriorityOptions } from "./helper/constant";

const AddTodoModal = () => {
  const [task, setTask] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [addTodo] = useAddTodoMutation();
  const { toast } = useToast();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task) {
      toast({
        title: "task is required!",
      });
      throw new Error("task is required!");
    } else if (!desc) {
      toast({
        title: "description is required!",
      });
      throw new Error("description is required!");
    } else if (!priority) {
      toast({
        title: "priority is required!",
      });
      throw new Error("priority is required!");
    }
    const taskDetails: TTodo = {
      title: task,
      description: desc,
      priority,
      isCompleted: false,
    };
    // For Server
    addTodo(taskDetails);
    setTask("");
    setDesc("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-lg font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                id="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="col-span-3"
                autoFocus={false}
                autoComplete="off"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="col-span-3"
                autoFocus={false}
                autoComplete="off"
              />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Dropdown
                title={"Select Priority"}
                options={filterByPriorityOptions}
                defaultOption={priority}
                setOption={setPriority}
              >
                <Button className="bg-transparent border text-black capitalize w-full hover:bg-gray-100 col-span-3">
                  {priority}
                </Button>
              </Dropdown>
            </div> */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Select onValueChange={setPriority}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup defaultValue={priority}>
                    {filterByPriorityOptions.map((option, index) => (
                      <SelectItem
                        key={index}
                        className="capitalize"
                        value={option}
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
