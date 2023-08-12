import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Palettes from "./Palettes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Palettes />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
