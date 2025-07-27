import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

// connect the server at the following url
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// query books
client
  .query({
    query: gql`
      query bookQuery {
        books {
          title
        }
      }
    `,
  })
  .then((result) => console.log(result))
  .catch((error) => console.error("Error fetching books:", error));

// Uncomment this

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
