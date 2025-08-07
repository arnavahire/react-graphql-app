import { ApolloClient, InMemoryCache } from "@apollo/client";

export const OptiGraphqlClient = new ApolloClient({
  uri: "https://cg.optimizely.com/content/v2?auth=pcZfBa1JEeUt3xYzJJE1kGmOaqXu2OMELLhr2acNjMjoZARU",
  cache: new InMemoryCache(),
});

export const OptiODPClient = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache(),
});
