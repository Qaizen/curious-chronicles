const db = require('../config/connection');
const { Parent } = require('../models');

const parentData = require('./parentSeed.json');

db.once('open', async () => {
  await Parent.deleteMany({});

  const parents = await Parent.insertMany(parentData);

  console.log('Parents seeded!');
  process.exit(0);
});
