import {
  Box,
  Typography,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Button,
  Stack,
  TextField,
  FormGroup,
} from "@mui/material";

import { Cat } from "./Cats";
import { useState } from "react";
import { Checkbox } from "@mui/material";

interface ChangeCatProps {
  fetchCats: () => void;
  cats: Cat[];
}

const ChangeCats = ({ fetchCats, cats }: ChangeCatProps) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [deleted, setDeleted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue((event.target as HTMLInputElement).value);
  };

  const changeCat = async () => {
    // console.log({
    //     id: value,
    //     name: name,
    //     deleted: deleted,
    //   });

    try {
      const response = await fetch("http://localhost:3033/cats", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: value,
          name: name,
          deleted: deleted,
        }),
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
    console.log("handleSubmit called");
    event.preventDefault();
    changeCat();
    setTimeout(fetchCats, 100);
  };

  return (
    // Choosing the cat to change.
    <Box>
      <Typography variant="h2">Cats</Typography>

      {cats &&
        cats.map((cat) => (
          <FormControl key={cat.id} component="fieldset">
            <RadioGroup
              aria-label="cat-choose"
              name={`change-cat-${cat.id}`}
              value={value}
              onChange={handleChange}>
              <FormControlLabel
                value={cat.id}
                control={<Radio />}
                label={cat.name}
              />
            </RadioGroup>
          </FormControl>
        ))}

      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="New Kitty Name"
            onChange={(event) => setName(event.target.value)}
          />
          {/* Wheter the cat will be deleted or not. */}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Deleted"
              onChange={(event) =>
                setDeleted((event.target as HTMLInputElement).checked)
              }
            />
          </FormGroup>
          <Button type="submit">Change</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ChangeCats;
