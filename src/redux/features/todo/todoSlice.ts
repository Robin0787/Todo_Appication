import { createSlice } from "@reduxjs/toolkit";

const todoInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {},
});

export default todoSlice.reducer;
