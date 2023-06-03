const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Parent {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: Parent
  }

  type Query {
    # Add query fields here (if any)
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
