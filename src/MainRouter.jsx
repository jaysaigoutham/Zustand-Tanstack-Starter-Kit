import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NoteList from "./Components/Notes/NoteList";
import Notes from "./Notes";
import TanstackApp from "./Components/TanstackNotes/TanstackNotes";
import CounterApp from "./CounterApp";
import NoteView from "./Components/Notes/NoteView";
import { AppBar, Container, Button } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CustomHookCounter from "./Components/CustomHookCounter/CustomHookCounter";
import { FormHook } from "./Components/FormHook/formHook";

const MainRouter = () => {
  const padding = {
    padding: 5,
  };

  const style = { "&:hover": { bgcolor: "rgba(255,255,255,0.3)" } };

  return (
    <Container>
      <BrowserRouter>
        <div>
          <h3>Tip : Make sure to run - npm run dev & npm run server</h3>
        </div>
        <AppBar position="static">
          <Button color="inherit" sx={style}>
            <Link style={padding} to="/">
              Notes
            </Link>
          </Button>
          <Button color="inherit" sx={style}>
            <Link style={padding} to="/tanstacknotes">
              TanStack Notes
            </Link>
          </Button>
          <Button color="inherit" sx={style}>
            <Link style={padding} to="/zustandcounter">
              Zustand Counter
            </Link>
          </Button>
          <Button color="inherit" sx={style}>
            <Link style={padding} to="/customhookcounter">
              Custom Hook Counter
            </Link>
          </Button>
          <Button color="inherit" sx={style}>
            <Link style={padding} to="/customhookform">
              Custom Hook Form
            </Link>
          </Button>
        </AppBar>
        <br />



        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/tanstacknotes" element={<TanstackApp />} />
          <Route path="/zustandcounter" element={<CounterApp />} />
          <Route path="/customhookcounter" element={<CustomHookCounter />} />
          <Route path="/customhookform" element={<FormHook />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
export default MainRouter;
