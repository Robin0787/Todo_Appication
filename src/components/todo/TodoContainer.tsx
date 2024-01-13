import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <section>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <section className="bg-red-600 w-full h-full rounded-xl p-1 space-y-3 bg-primary-gradient">
        <div className="bg-white p-5 rounded-lg w-full h-full space-y-3">
          {todos.length > 0 ? (
            todos.map((todo) => <TodoCard key={todo.id} task={todo} />)
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
