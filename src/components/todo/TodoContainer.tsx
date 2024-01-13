import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <section>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <section className="bg-red-600 w-full h-full rounded-xl p-5 space-y-3">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </section>
    </section>
  );
};

export default TodoContainer;
