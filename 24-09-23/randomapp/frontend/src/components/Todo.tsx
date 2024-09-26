import { useEffect, useState } from "react";
import { Box, List, ListItem, Typography, Button } from "@mui/material";

export type Todo = {
  id: number;
  title: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date | null;
  deleted: boolean;
};

const URL = "http://localhost:3033/todos";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    setTodos(data);
  };

  const showCompletion = () => {};
  const deleteTodos = async (id: number) => {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "applitodoion/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (response.ok) {
      fetchTodos();
      showCompletion();
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h2">Todos</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            {JSON.stringify(todo)}{" "}
            <Button
              variant="contained"
              color="warning"
              onClick={() => deleteTodos(todo.id)}>
              X
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Todos;
