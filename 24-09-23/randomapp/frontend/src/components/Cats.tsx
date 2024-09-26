import { useEffect, useState } from "react";
import { Box, List, ListItem, Typography, Button } from "@mui/material";
import SubmitCat from "./SubmitCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  delted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3033/cats");
    const data = await response.json();

    setCats(data);
  };

  const showCompletion = () => {};
  const deleteCats = async (id: string) => {
    const response = await fetch("http://localhost:3033/cats", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (response.ok) {
      fetchCats();
      showCompletion();
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h2">Cats</Typography>
      <List>
        {cats.map((cat) => (
          <ListItem key={cat.id}>
            {JSON.stringify(cat)}{" "}
            <Button
              variant="contained"
              color="warning"
              onClick={() => deleteCats(cat.id)}>
              X
            </Button>
          </ListItem>
        ))}
      </List>
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
