import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: ["Comic Sans MS", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
