const { Schema, model } = require('mongoose');

const playerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        clubs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Club',
            },
        ],
    },
    {
        timestamps: true,
    },
);
const Player = model('Player', playerSchema);
module.exports = Player;
