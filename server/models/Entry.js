const { Schema } = require('mongoose');

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

module.exports = entrySchema;
