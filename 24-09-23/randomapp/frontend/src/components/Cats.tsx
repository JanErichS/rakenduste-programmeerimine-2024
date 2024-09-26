import { useEffect, useState } from "react";

import { Box, List, ListItem, Typography } from "@mui/material";
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

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h2">Cats</Typography>
      <List>
        {cats.map((cat) => (
          <ListItem key={cat.id}>{JSON.stringify(cat)}</ListItem>
        ))}
      </List>
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
