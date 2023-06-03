const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const parentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  savedChildren: [childSchema],
},
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);



// hash user password
parentSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
parentSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `savedChildren` with the number of saved books we have
parentSchema.virtual('savedChildren').get(function () {
  return this.savedChildren.length;
});


const Parent = model('Parent', parentSchema);

module.exports = Parent;
