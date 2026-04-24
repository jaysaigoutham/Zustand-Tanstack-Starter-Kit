import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterApp from "./CounterApp.jsx"; // Counter
import Notes from "./Notes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TanstackApp from "./Components/TanstackNotes/TanstackNotes.jsx";
import { CounterContextProvider } from "./Components/Contexts/CounterContext.jsx";
import ParentNavigation from "./ParentNavigation.jsx";
import MainRouter from "./MainRouter.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <CounterContextProvider>
      <MainRouter /> { /* <ParentNavigation />*/}
    </CounterContextProvider>
  </QueryClientProvider>,
);
