const { Schema, model } = require('mongoose');


const entrySchema = new Schema({
    ChildId:
    {
        type: String,
        required: true,
        unique: false,
    },
    mood: {
        type: String, //maybe change to a number scale system 1-5. sad = 1, happy = 5
        required: true,
    },
    responseOne: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

const Entry = model('Entries', entrySchema);


module.exports = Entry;
