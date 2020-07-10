import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
query books {
  books {
    id
    name
    genre
    authorId
  }
}
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

// const getBookQuery = gql`
//   query book($id: String!) {
//     book(id: $id) {
//       id
//       name
//       genre
//       author {
//         name
//         age
//         id
//         book {
//           name
//           id
//         }
//       }
//     }
//   }
// `;

const getBookQuery = gql`
  query book($id: String!) {
    book(id: $id) {
      id
      name
      genre
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
