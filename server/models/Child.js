const { Schema, model } = require('mongoose');

const Parent = require('./Parent');

const childSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    badges: {
        type: String,
    },
    // we can add favorite color and theme later!
    theme: {
        type: String,
    },
    // dont know if this is needed
    grownups: [{ type: Schema.Types.ObjectId, ref: 'Parent' }],

    entries: [
        {
            type:Schema.Types.ObjectId,
            ref: 'Entries'
        }
    ]

});

const Child = model('Child', childSchema);

module.exports = Child;

