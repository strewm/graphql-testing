const { ApolloServer } = require('apollo-server-express');
const express = require("express");

const typeDefs = require("./schema.js");
const resolvers = require("./resolvers/index");


const app = express();


let apolloServer = null;

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startServer();

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port 4000...`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});
