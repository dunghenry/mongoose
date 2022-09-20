const { Schema, model } = require('mongoose');
const blogSchema = new Schema(
    {
        blogId: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
const Blog = model('Blog', blogSchema);
module.exports = Blog;
