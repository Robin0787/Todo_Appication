import { ReactNode } from "react";

interface TContainerProps {
  children: ReactNode;
}

const Container = ({ children }: TContainerProps) => {
  return (
    <section className="h-screen w-full max-w-7xl mx-auto">{children}</section>
  );
};

export default Container;
