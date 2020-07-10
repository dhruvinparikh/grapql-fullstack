require("dotenv").config("./.env");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/schema");
const resolvers = require("./schema/resolvers");

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

// allow cross-origin requests
app.use(cors());

// connect to mlab database
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@gql-fs-lou7v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
