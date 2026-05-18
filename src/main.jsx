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
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./Styled.js";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.jsx";

// Keep a single React Query client instance for the full app lifecycle.
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <CounterContextProvider>
          {/* Global fallback for unhandled render errors in the routed app tree. */}
          <ErrorBoundary>
            <MainRouter /> {/* <ParentNavigation />*/}
          </ErrorBoundary>
        </CounterContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
