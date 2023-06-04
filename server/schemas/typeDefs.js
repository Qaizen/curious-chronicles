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
    parents: [Parent]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
