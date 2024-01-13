const TodoCard = () => {
  return (
    <section className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" name="" id="" className="cursor-pointer" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-8">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </section>
  );
};

export default TodoCard;
