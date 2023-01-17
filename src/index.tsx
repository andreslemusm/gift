import { FavoritesProvider } from "./context/favorites";
import { QueryClientProvider } from "./context/query-client";
import { Router } from "./context/router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");
if (!container)
  throw new Error(
    "Please check you 'index.html', you probably deleted the ReactDOM container"
  );

createRoot(container).render(
  <StrictMode>
    <QueryClientProvider>
      <FavoritesProvider>
        <Router />
      </FavoritesProvider>
    </QueryClientProvider>
  </StrictMode>
);
