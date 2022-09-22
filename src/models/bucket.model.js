const { Schema, model } = require('mongoose');

const bucketSchema = new Schema(
    {
        blogId: {
            type: String,
        },
        count: {
            type: Number,
            required: true,
        },
        comments: {
            type: Array,
            default: [
                {
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
            ],
        },
    },
    {
        timestamps: true,
    },
);

const Bucket = model('Bucket', bucketSchema);

module.exports = Bucket;
