const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Parent {
    _id: ID!
    name: String!
    email: String!
    savedChildren: [Child]
  }

  type Child {
    _id: ID!
    name: String!
    badges: String
    theme:String
    grownups: [Parent]!
    entries: [Entry]
  }

  type Entry {
    _id: ID!
    ChildId: String!
    mood: String
    responseOne: String
  }

  type Auth {
    token: ID!
    user: Parent
  }

  type Query {
    me: Parent
    parents: [Parent]
    parent(_id: ID!): Parent
    children: [Child]
    child(_id: ID!): Child
    entries: [Entry]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addEntry(ChildId: String!, mood: String!, responseOne: String): Entry
    deleteEntry(_id: ID!): Entry
    login(email: String!, password: String!): Auth
    createChild(name: String!, badges: String, theme: String, grownups: [String]): Child
    updateEntry(_id: ID!, mood: String, responseOne: String): Entry
  }
`;

module.exports = typeDefs;
