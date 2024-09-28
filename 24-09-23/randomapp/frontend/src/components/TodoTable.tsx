import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

import { useEffect } from "react";
import { formatDate } from "../utils/utils";
import { Todo } from "./Todo";

export interface SubmitTodoProps {
  fetchTodos: () => void;
  URL: string;
  todos: Todo[];
}

// const updateTodo = async (todo: Todo) => {
//   try {
//     const response = await fetch("http://localhost:3033/todos", {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(todo),
//     });

//     if (response.ok) {
//       console.log("Success", response);
//       fetchSomething(URL);
//     } else {
//       console.warn("No success");
//     }
//   } catch (error) {
//     console.warn(error);
//   }
// };

const TodoTable = ({ fetchTodos, URL, todos }: SubmitTodoProps) => {
  const deleteTodos = async (id: string) => {
    const response = await fetch(URL, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      fetchTodos();
    } else {
      console.warn("No success");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Priority</TableCell>

            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Title
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Content
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Created
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Complete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {todo.priority}
              </TableCell>
              <TableCell component="th" scope="row">
                {todo.todoTitle}
              </TableCell>
              <TableCell component="th" scope="row">
                {todo.content}
              </TableCell>
              <TableCell component="th" scope="row">
                {formatDate(todo.createdAt as unknown as number)}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => deleteTodos(todo.id)}>
                  X
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoTable;
