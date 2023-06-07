const { Schema, model } = require('mongoose');
const Child = require('./Child');


const entrySchema = new Schema({
    ChildId: [
        {
            type: String,
            required: true,
        },
    ],
    mood: {
        type: String, //number maybe?
        required: true,
    },
    responseOne: {
        type: String,
        required: true,
    },

    responseTwo: {
        type: String,
        required: true,
    },
    responseThree: {
        type: String,
    },
    images: {
        type: String,
    }
});

const Entry = model('Entries', entrySchema);


module.exports = Entry;
