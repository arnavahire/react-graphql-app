import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import { OptiODPClient } from "./shared/ApolloClients.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ApolloProvider client={OptiODPClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </ApolloProvider>
  </BrowserRouter>
);
