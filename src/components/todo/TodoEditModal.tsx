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
import { useUpdateTodoMutation } from "@/redux/api/api";
import { TTodo, TTodoFromDB } from "@/redux/features/todo/todo.interface";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
import Dropdown from "./Dropdown";
import { filterByPriorityOptions } from "./helper/constant";

const TodoEditModal = ({ todo }: { todo: TTodoFromDB }) => {
  const { _id, title, description, priority } = todo;
  const [task, setTask] = useState<string>(title);
  const [desc, setDesc] = useState<string>(description);
  const [todoPriority, setTodoPriority] = useState<string>(priority);
  const [updatedTodo] = useUpdateTodoMutation();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task) {
      throw new Error("task is required!");
    } else if (!desc) {
      throw new Error("description is required!");
    } else if (!todoPriority) {
      throw new Error("priority is required!");
    }
    const taskDetails: Partial<TTodo> = {
      title: task,
      description: desc,
      priority: todoPriority,
    };
    updatedTodo({ _id, data: taskDetails });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#5c53FE] px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update task</DialogTitle>
          <DialogDescription>
            Update your task details as you want.
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Dropdown
                title={"Select Priority"}
                options={filterByPriorityOptions}
                defaultOption={todoPriority}
                setOption={setTodoPriority}
              >
                <Button className="bg-transparent border text-black capitalize w-full hover:bg-gray-100 col-span-3">
                  {todoPriority}
                </Button>
              </Dropdown>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Update</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoEditModal;
