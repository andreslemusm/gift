import { QueryClientProvider } from "./context/query-client";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "./context/router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";
import "./index.css";

const container = document.getElementById("root");
if (!container)
  throw new Error(
    "Please check you 'index.html', you probably deleted the ReactDOM container"
  );

createRoot(container).render(
  <StrictMode>
    <QueryClientProvider>
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    </QueryClientProvider>
  </StrictMode>
);
