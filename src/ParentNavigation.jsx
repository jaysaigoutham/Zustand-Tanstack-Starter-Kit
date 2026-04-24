import { useState } from "react";
import CounterApp from "./CounterApp";
import Notes from "./Notes";
import TanstackApp from "./Components/TanstackNotes/TanstackNotes";

const ParentNavigation = () => {
  const [page, setPage] = useState("home");
  const toPage = (page) => (event) => {
    event.preventDefault();
    setPage(page);
  };
  const content = () => {
    if (page === "notes") {
      return <Notes />;
    } else if (page === "tanstack") {
      return <TanstackApp />;
    } else if (page === "counter") {
      return <CounterApp />;
    }
  };

  return (
    <div>
      <div>
        <h3>Tip : Make sure to run - npm run dev & npm run server</h3>
      </div>
      <div>
        <a href="" onClick={toPage("notes")}>
          Notes (powered by JSON Server)
        </a><br/>
        <a href="" onClick={toPage("tanstack")}>
          Tanstack (powered by JSON Server)
        </a><br/>
        <a href="" onClick={toPage("counter")}>
          Counter
        </a><br/>
      </div>
      <br/>
      {content()}
    </div>
  );
};

export default ParentNavigation;
