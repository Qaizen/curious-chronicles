const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Parent, Child, Entry } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        try {
          const userData = await Parent.findOne({ _id: context.user.id })
          return userData

        } catch (error) {
          throw error
        }
      }
      throw new AuthenticationError('Please log in!')
    },
    
    //used for finding list of all parents
    parents: async () => {
      try {
        const parents = await Parent.find();
        return parents;
      } catch (error) {
        throw new Error('Failed to fetch parents')
      }
    },

    //used for finding list of single parent
    parent: async (placeholder, { _id }) => {
      try {
        const oneParent = await Parent.findOne({ parent })
          .select('-__v -password')
          .populate('savedChildren')
        return oneParent;
      } catch (error) {
        throw new Error('Failed to fetch parents')
      }
    },

    //used for finding list of all children
    children: async () => {
      try {
        const children = await Child.find();
        return children;
      } catch (error) {
        throw new Error('Failed to fetch children')
      }
    },

    //used for finding single child
    child: async (placeholder, { _id }) => {
      try {
        const oneChild = await Child.findOne({ _id })
        .populate("entries")
        return oneChild
      } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch one child')
      }
    },

    // Probably don't need below entries code,
    // cause when we want a child's entries
    // it will be referred to through child by id

    // currently using for testing
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
    addEntry: async (parent, args) => {
      // console.log("add entry start")
      const entry = await Entry.create({...args});
      // console.log(entry)
      const childUpdate = await Child.findOneAndUpdate(
        { _id: entry.ChildId },
        { $push: { entries: entry._id } },
        { new: true }
      );
      // console.log(childUpdate)
      return entry;
    },

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