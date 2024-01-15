import { TTodoFromDB } from "@/redux/features/todo/todo.interface";
import { removeTodo, toggleTaskStatus } from "@/redux/features/todo/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import TodoEditModal from "./TodoEditModal";

const TodoCard = ({ task }: { task: TTodoFromDB }) => {
  const dispatch = useAppDispatch();
  const { _id, title, description, priority, isCompleted } = task;

  const handleToggleTaskStatus = () => {
    dispatch(toggleTaskStatus(_id));
  };

  return (
    <section className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input
        type="checkbox"
        name="taskStatus"
        id=""
        className="cursor-pointer size-4 rounded-lg mr-6"
        checked={isCompleted}
        onChange={handleToggleTaskStatus}
      />
      <p className="font-semibold flex-1">{title}</p>
      <div
        className={`${isCompleted ? "text-green-500" : "text-red-500"} flex-1`}
      >
        <p>{isCompleted ? "Done" : "Pending"}</p>
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="text-sm  text-black/60 flex-1 flex justify-start items-center gap-[5px]">
        <div
          className={`size-2 rounded-full ${
            priority === "high"
              ? "bg-red-500"
              : priority === "medium"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        ></div>
        <p className="capitalize">{priority}</p>
      </div>
      <div className="space-x-8 ml-4">
        <Button
          className="bg-red-600 px-3"
          onClick={() => dispatch(removeTodo(_id))}
        >
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <TodoEditModal todo={task} />
      </div>
    </section>
  );
};

export default TodoCard;
