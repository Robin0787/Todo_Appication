import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTodo } from "../features/todo/todo.interface";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-server-tawny.vercel.app",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data: TTodo) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;
