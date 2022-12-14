import { App } from "./app";
import { QueryClientProvider } from "./context/query-client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");

if (!container)
  throw new Error(
    "Please check you 'index.html', you probably deleted the ReactDOM container"
  );

const root = createRoot(container);
root.render(
  <StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
