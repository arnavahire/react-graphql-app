# react-graphql-app

This is a react app where data is fetched from graphql using Apollo client and displayed on pages.

I have another project 'graphql-server' that runs the graphql server. It runs locally on port 4000 hence can be accessed by http://localhost:4000/graphql.
Our Graphql client can be configured to point to that url in case you want to test custom graphql server. There exists a backup.tsx file which has code to fetch a simple book data from this graphql server. This is just for testing purpose. The backup.tsx is not related to the project otherwise.
