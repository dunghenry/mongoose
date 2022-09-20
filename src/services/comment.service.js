const { StackOverFlow } = require('../models/comment.model');
const commentService = {
    insertComment: async ({ blogId, commentId, name, body, email }) => {
        try {
            return await StackOverFlow.create({
                blogId,
                commentId,
                name,
                body,
                email,
            });
        } catch (error) {
            console.log(error);
        }
    },
    insertComments: async (data) => {
        try {
            return await StackOverFlow.insertMany(data);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = commentService;
