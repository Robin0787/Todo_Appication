import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTodo, TTodoInitialState } from "./todo.interface";

const todoInitialState: TTodoInitialState = {
  todos: [
    {
      title: "Buy groceries",
      description: "Get milk, eggs, and bread from the grocery store.",
      priority: "high",
      isCompleted: false,
    },
    {
      title: "Read book",
      description: "Enjoy the latest novel by your favorite author.",
      priority: "low",
      isCompleted: false,
    },
    {
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
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
