const { Schema, model } = require('mongoose');



const childSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  badges: {
    type: String,
    required: true,
  },
  // we can add favorite color and theme later!
  savedEntry: [bookSchema],
  // dont know if this is needed
  Growups: [parentSchema],

});






const Child = model('Child', childSchema);

module.exports = Child;
