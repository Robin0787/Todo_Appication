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
      query: (priority: string) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: `/tasks`,
          method: "GET",
          params,
        };
      },
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
    deleteTodo: builder.mutation({
      query: (_id: string) => ({
        url: `/task/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    toggleTodoStatus: builder.mutation({
      query: ({ _id, status }: { _id: string; status: boolean }) => ({
        url: `/task/${_id}`,
        method: "PUT",
        body: { isCompleted: status },
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: ({ _id, data }: { _id: string; data: Partial<TTodo> }) => ({
        url: `/task/${_id}`,
        method: "PUT",
        body: { ...data },
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoStatusMutation,
  useUpdateTodoMutation,
} = baseApi;
