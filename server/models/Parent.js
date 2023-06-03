const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Child = require('./Child');

const parentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    /*Each Parent document can have multiple Child documents associated with it through the savedChildren field by using [{ type: Schema.Types.ObjectId, ref: 'Child' }]
    The savedChildren field will store an array of ObjectId values that correspond to the _id values of related Child documents. */
    savedChildren: [{ type: Schema.Types.ObjectId, ref: 'Child' }],
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

// when we query a parent, we'll also get another field called `savedChildren` with the number of children per parent
parentSchema.virtual('numSavedChildren').get(function () {
    return this.savedChildren.length;
});


const Parent = model('Parent', parentSchema);

module.exports = Parent;