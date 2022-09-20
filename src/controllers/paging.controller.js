const {
    insertComment,
    insertComments,
} = require('../services/comment.service');
const axios = require('axios');
const pagingController = {
    insertComment: async (req, res) => {
        const { blogId, commentId, name, email, body } = req.body;
        try {
            return res.status(201).json({
                status: 'success',
                element: await insertComment({
                    blogId,
                    commentId,
                    name,
                    email,
                    body,
                }),
            });
        } catch (error) {
            console.log(error);
        }
    },
    insertComments: async (req, res) => {
        try {
            const { data } = await axios(
                `https://jsonplaceholder.typicode.com/comments`,
            );
            const rs = data.map((item) => {
                return {
                    blogId: 1,
                    commentId: +item.id,
                    name: item.name,
                    body: item.body,
                    email: item.email,
                };
            });
            const result = await insertComments(rs);
            return res.status(200).json({
                status: 'success',
                elements: result,
            });
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = pagingController;
