const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const dbConnect = require("./config/mongo");
const schema = require("./config/schema");

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs: schema.typeDefs,
        resolvers: schema.resolvers,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    });

    await server.start().then(() => {
                console.log(`GraphQL Running`);
            }).catch(err => {
                throw new Error(err);
            });

    server.applyMiddleware({
        app,
        path: "/api/graphql"
    });
}

app.listen(port, async () => {
    await dbConnect();
    await startApolloServer();
    console.log(`Server Running on ${port} port`);
}).on("error", err => {
    throw new Error(err);
});