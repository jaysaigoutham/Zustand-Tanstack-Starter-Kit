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
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.jsx";

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



        {/* Route-level boundaries isolate page failures and keep navigation usable. */}
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/tanstacknotes" element={<ErrorBoundary><TanstackApp /></ErrorBoundary>} />
          <Route path="/zustandcounter" element={<ErrorBoundary><CounterApp /></ErrorBoundary>} />
          <Route path="/customhookcounter" element={<ErrorBoundary><CustomHookCounter /></ErrorBoundary>} />
          <Route path="/customhookform" element={<ErrorBoundary><FormHook /></ErrorBoundary>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
export default MainRouter;
