import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";
import { useGetTodosQuery } from "@/redux/api/api";

const Todo = () => {
  const { data, isLoading } = useGetTodosQuery(undefined);
  console.log(data);

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-primary-gradient flex justify-center items-center text-4xl text-white">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-10">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
