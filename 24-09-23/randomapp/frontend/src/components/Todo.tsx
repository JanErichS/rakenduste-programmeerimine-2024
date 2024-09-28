import { Box, Typography } from "@mui/material";
import TodoTable from "./TodoTable";
import { useState } from "react";
import { fetchSomething } from "../utils/utils";
import SubmitTodo from "./SubmitTodo";

export type Todo = {
  id: string;
  todoTitle: string;
  priority: number;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
  deleted: boolean;
};

const URL = "http://localhost:3033/todos";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = async () => {
    const data = await fetchSomething(URL);
    setTodos(data);
  };
  return (
    <Box>
      <Typography
        variant="h2"
        display="flex"
        justifyContent="center"
        alignItems="center">
        Todos
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <TodoTable fetchTodos={fetchTodos} URL={URL} todos={todos} />
      </Box>
      <Typography
        variant="h3"
        display="flex"
        justifyContent="center"
        alignItems="center">
        Add a todo
      </Typography>
      <SubmitTodo fetchTodos={fetchTodos} URL={URL} todos={todos} />
    </Box>
  );
};

export default Todos;
