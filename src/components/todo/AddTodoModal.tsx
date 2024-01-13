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
import { TTodo } from "@/redux/features/todo/todo.interface";
import { addTodo } from "@/redux/features/todo/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";

const AddTodoModal = () => {
  const [task, setTask] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task) {
      throw new Error("task is required!");
    } else if (!desc) {
      throw new Error("description is required!");
    }
    const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetails: TTodo = {
      id: randomString,
      title: task,
      description: desc,
    };
    dispatch(addTodo(taskDetails));
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
