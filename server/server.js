const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const cors = require("cors");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app })

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`RUNNNING IN PORT ${PORT}`)
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    })
  })
}

startApolloServer();


