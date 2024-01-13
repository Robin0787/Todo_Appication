import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTodo, TTodoInitialState } from "./todo.interface";

const todoInitialState: TTodoInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.unshift({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const selectedTask = state.todos.filter(
        (todo) => todo.id === action.payload
      )[0];
      const restOfTasks = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      selectedTask.isCompleted = !selectedTask.isCompleted;
      if (selectedTask.isCompleted) {
        restOfTasks.push(selectedTask);
        state.todos = restOfTasks;
      } else {
        state.todos.sort((a) => (a.isCompleted ? 1 : -1));
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTaskStatus } = todoSlice.actions;

export default todoSlice.reducer;
