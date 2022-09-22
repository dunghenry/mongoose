const { Schema, model } = require('mongoose');
const clubSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Club = model('Club', clubSchema);
module.exports = Club;
