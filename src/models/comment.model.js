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
module.exports = { StackOverFlow };
