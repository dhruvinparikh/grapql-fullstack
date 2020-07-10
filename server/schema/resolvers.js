const Book = require("../models/book");
const Author = require("../models/author");

const resolvers = {
  Query: {
    async books(root, {}, {}) {
      return await Book.find({});
    },
    async authors(root, {}, {}) {
      return await Author.find({});
    },
    async book(root, args, {}) {
      return await Book.findById(args.id);
    },
  },
};

module.exports = resolvers;
