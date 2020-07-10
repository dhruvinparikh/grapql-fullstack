const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Book {
        id: String!
        name: String!
        genre: String!
        authorId: String!
    }
    type Author {
        name: String!
        age: Int!
    }

    type Query {
        books: [Book]!
        authors: [Author]!
        book(id: String!): Book
    }
`;

module.exports = typeDefs;