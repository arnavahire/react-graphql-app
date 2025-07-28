# react-graphql-app

This is a react app where data of CommunityAmerica.com is fetched from graphql using Apollo client and displayed on pages.

- **_Main.tsx_** : Entrypoint of the app. It has the config for graphql client including security API_KEY required to connect to optimizely's GraphQl.

- **_App.tsx_** : Main page of the app wherein data for Advisor and News are displayed.

- **_components_** : Directory that contains functional components for advisor listing, news listing.

- **_graphql_** : Directory that contains graphql queries for advisor listing and news listing.

### TODO:
  Using a code generation tool, a generated.ts file can be created that defines TypeScript types corresponding to GraphQL interfaces, facilitating type-safe development and schema alignment.
  
### NOTE:
In order to use the graphql client successfully to fetch the data using CACU's optimizely graph, please enter a valid key in place of {API_KEY} in main.tsx.

### SIDE-NOTE:
I have another project 'graphql-server' that runs the graphql server. It runs locally on port 4000 hence can be accessed by http://localhost:4000/graphql.
Our Graphql client can be configured to point to that url in case you want to test custom graphql server. There exists a backup.tsx file which has code to fetch a simple book data from this graphql server. This is just for testing purpose. The backup.tsx is not related to the project otherwise.
