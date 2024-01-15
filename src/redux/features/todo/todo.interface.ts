export type TTodo = {
  title: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
};

export type TTodoFromDB = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted: boolean;
};

export type TTodoInitialState = {
  todos: TTodo[];
};
