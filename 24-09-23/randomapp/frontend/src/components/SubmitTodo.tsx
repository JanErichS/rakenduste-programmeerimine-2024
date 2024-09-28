import { Box, Button, Stack, TextField } from "@mui/material";
import { SubmitTodoProps } from "./TodoTable";
import React, { useState } from "react";

export default function SubmitTodos({ fetchTodos, URL }: SubmitTodoProps) {
  const [todoTitle, setTodoTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState(0);

  const submitTodo = async () => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todoTitle,
          content,
          priority,
        }),
      });

      if (response.ok) {
        console.log("Success", response);
        setTodoTitle("");
        setContent("");
        setPriority(0);
      } else {
        console.warn("No success");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    submitTodo();
    setTimeout(fetchTodos, 100);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Todo Title"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
          />
          <TextField
            label="Todo Content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <TextField
            label="Todo priority"
            type="number"
            value={priority}
            onChange={(event) => setPriority(parseInt(event.target.value, 10))}
          />
          <Button type="submit">Add</Button>
        </Stack>
      </form>
    </Box>
  );
}
