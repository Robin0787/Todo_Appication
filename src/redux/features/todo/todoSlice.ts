import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTodo, TTodoInitialState } from "./todo.interface";

const todoInitialState: TTodoInitialState = {
  todos: [
    {
      id: "1",
      title: "Buy groceries",
      description: "Get milk, eggs, and bread from the grocery store.",
      priority: "high",
      isCompleted: false,
    },
    {
      id: "2",
      title: "Read book",
      description: "Enjoy the latest novel by your favorite author.",
      priority: "low",
      isCompleted: false,
    },
    {
      id: "3",
      title: "Exercise",
      description: "Do a quick 30-minute workout at home or the gym.",
      priority: "medium",
      isCompleted: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.unshift(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      // get the selected task by it's id.
      const selectedTask = state.todos.filter(
        (todo) => todo.id === action.payload
      )[0];
      // filter out all other elements and then push the selected task to the end of the array.
      const restOfTasks = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      selectedTask.isCompleted = !selectedTask.isCompleted;
      if (selectedTask.isCompleted) {
        // push the completed task at the end of the array.
        restOfTasks.push(selectedTask);
        state.todos = restOfTasks;
      } else {
        // if the task is not completed then sort all the tasks based on isCompleted property
        const completedTasks = state.todos.filter((todo) => todo.isCompleted);
        const pendingTasks = state.todos.filter((todo) => !todo.isCompleted);
        state.todos = [...pendingTasks, ...completedTasks];
      }
    },
    updateTodoDetails: (state, action: PayloadAction<TTodo>) => {
      const { id, title, description, priority } = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
          todo.description = description;
          todo.priority = priority;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTaskStatus, updateTodoDetails } =
  todoSlice.actions;

export default todoSlice.reducer;
