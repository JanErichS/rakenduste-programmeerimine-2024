import { FormEventHandler, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

type SubmitCatProps = {
  fetchCats: () => void;
};

export default function SubmitCat({ fetchCats }: SubmitCatProps) {
  const [name, setName] = useState("");

  const submitCat = async () => {
    try {
      const response = await fetch("http://localhost:3033/cats", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });

      if (response.ok) {
        console.log("Success", response);
      } else {
        console.warn("No success");
      }
    } catch (error) {
      console.warn(error);
    }
  };

 const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		submitCat();
		setTimeout(fetchCats, 100);
 };
 
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Kitty's name"
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit">Add</Button>
        </Stack>
      </form>
    </Box>
  );
}
