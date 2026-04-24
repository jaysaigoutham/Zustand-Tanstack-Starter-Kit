import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NoteList from "./Components/Notes/NoteList";
import Notes from "./Notes";
import TanstackApp from "./Components/TanstackNotes/TanstackNotes";
import CounterApp from "./CounterApp";

const MainRouter = () => {
  const padding = {
    padding: 5,
  };

  return (
    <BrowserRouter>
      <div>
        <h3>Tip : Make sure to run - npm run dev & npm run server</h3>
      </div>
      <div>
        <Link style={padding} to="/">
          Notes
        </Link>
        <Link style={padding} to="/tanstacknotes">
          TanStack Notes
        </Link>
        <Link style={padding} to="/zustandcounter">
          Zustand Counter
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/tanstacknotes" element={<TanstackApp />} />
        <Route path="/zustandcounter" element={<CounterApp />} />
      </Routes>

    </BrowserRouter>
  );
};
export default MainRouter;
