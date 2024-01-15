import { useGetTodosQuery } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todo/todo.interface";
import { useState } from "react";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import Dropdown from "./Dropdown";
import TodoCard from "./TodoCard";
import { filterByPriorityOptions } from "./helper/constant";

const TodoContainer = () => {
  const [filter, setFilter] = useState<string>("");
  const handleFilterPriority = (value: string) => {
    setFilter(value);
  };

  const { data, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 h-screen w-full bg-primary-gradient flex justify-center items-center text-4xl text-white">
        <p>Loading...</p>
      </div>
    );
  }
  const filteredTodos: TTodo[] = data.data.filter((todo: TTodo) =>
    filter ? todo.priority === filter : true
  );
  return (
    <section>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <Dropdown
          title={"Filter By Priority"}
          options={filterByPriorityOptions}
          defaultOption={filter}
          setOption={handleFilterPriority}
        >
          <Button className="bg-primary-gradient text-lg font-semibold capitalize w-24">
            {filter || "Filter"}
          </Button>
        </Dropdown>
      </div>
      <section className="bg-red-600 w-full h-full rounded-xl p-1 space-y-3 bg-primary-gradient">
        <div className="bg-white p-5 rounded-lg w-full h-full space-y-3">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo: TTodo) => (
              <TodoCard key={todo.id} task={todo} />
            ))
          ) : (
            <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
              <p>There is no task pending</p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default TodoContainer;
