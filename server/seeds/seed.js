const db = require('../config/connection');
const { Parent } = require('../models');
const bcrypt = require('bcrypt');
const parentData = require('./parentSeed.json');

db.once('open', async () => {
  await Parent.deleteMany({});

  // Iterate over the parentData and hash the passwords before saving them
  const parents = await Promise.all(parentData.map(async (parent) => {
    const hashedPassword = await bcrypt.hash(parent.password, 10);
    return {
      ...parent,
      password: hashedPassword
    };
  }));

  await Parent.insertMany(parents);

  console.log('Parents seeded!');
  process.exit(0);
});