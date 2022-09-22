const { Schema, model } = require('mongoose');
const stackOverFlowSchema = new Schema(
    {
        blogId: {
            type: Number,
            required: true,
        },
        commentId: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
        },
        body: {
            type: String,
        },
        name: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

const StackOverFlow = model('StackOverFlow', stackOverFlowSchema);

const hackNewsSchema = new Schema(
    {
        blogId: {
            type: Number,
            required: true,
        },
        commentId: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
        },
        body: {
            type: String,
        },
        name: {
            type: String,
        },
        time: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    },
);

const HackNew = model('HackNew', hackNewsSchema);

const eventSchema = new Schema(
    {
        userId: {
            type: Number,
            required: true,
        },
        time: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    },
);
const Event = model('Event', eventSchema);
module.exports = { StackOverFlow, HackNew, Event };
