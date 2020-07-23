require('dotenv').config();

// import ApolloServer class from apollo-server
const {ApolloServer} = require("apollo-server");
// import schema from schema.js
const typeDefs = require("./schema");
// create an instance of ApolloServer and 
// pass schema via typeDefs property
const server = new ApolloServer({ typeDefs });

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})