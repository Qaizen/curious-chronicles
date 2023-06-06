const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Parent, Child, Entry } = require('../models');

const resolvers = {
  Query: {
    parents: async () => {
      try {
        const parents = await Parent.find();
        return parents;
      } catch (error) {
        throw new Error('Failed to fetch parents')
      }
    },

    children: async () => {
      try {
        const children = await Child.find();
        return children;
      } catch (error) {
        throw new Error('Failed to fetch children')
      }
    },

    entries: async () => {
      try {
        const entries = await Entry.find();
        return entries;
      } catch (error) {
        throw new Error('Failed to fetch entries')
      }
    }

  },
  Mutation: {
    addUser: async (parent, args) => {
      // First, we create the user
      const user = await Parent.create(args);
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await Parent.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If the email and password are correct, sign the user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
  },
};

module.exports = resolvers;