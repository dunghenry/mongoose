const { StackOverFlow, HackNew } = require('../models/comment.model');
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
            return await HackNew.insertMany(data);
        } catch (error) {
            console.log(error);
        }
    },
    list: async ({ blogId, page = 1, pagesize = 50 }) => {
        try {
            // page skip limit
            //  1    0    50
            //  2    50    50
            // skip =  (page - 1) * limit
            return await StackOverFlow.find({ blogId })
                .skip((page - 1) * pagesize)
                .limit(pagesize);
        } catch (error) {
            console.log(error);
        }
    },
    listHackNews: async ({ blogId, pagesize, commentId }) => {
        try {
            return await HackNew.find({
                blogId,
                commentId: { $gt: commentId },
            })
                .select({ commentId: 1 })
                .limit(pagesize);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = commentService;
