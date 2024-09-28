import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SubmitCat from "./SubmitCat";
import ChangeCats from "./ChangeCats";
import { fetchSomething, formatDate } from "../utils/utils";

export type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  delted: boolean;
};

const URL = "http://localhost:3033/cats";

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const data = await fetchSomething(URL);
    setCats(data);
  };

  const deleteCats = async (id: string) => {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (response.ok) {
      fetchCats();
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography
        variant="h2"
        display="flex"
        justifyContent="center"
        alignItems="center">
        Cats
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Cat Name</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  ID
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Created
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Updated
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cats.map((cat) => (
                <TableRow
                  key={cat.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {cat.name}
                  </TableCell>
                  <TableCell align="right">{cat.id}</TableCell>
                  <TableCell align="right">
                    {formatDate(cat.createdAt)}
                  </TableCell>
                  <TableCell align="right">
                    {formatDate(cat.updatedAt)}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => deleteCats(cat.id)}>
                      X
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Typography
        variant="h3"
        display="flex"
        justifyContent="center"
        alignItems="center">
        Add a Cat
      </Typography>
      <SubmitCat fetchCats={fetchCats} />
      <ChangeCats fetchCats={fetchCats} cats={cats} />
    </Box>
  );
};

export default Cats;
