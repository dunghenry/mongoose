const bucketService = require('../services/bucket.service');
const bucketController = {
    insertBucket: async (req, res) => {
        try {
            const { blogId, commentId, name, email, body } = req.body;
            return res.status(200).json(
                await bucketService.insertBucket({
                    blogId,
                    commentId,
                    name,
                    email,
                    body,
                }),
            );
        } catch (error) {
            console.log(error);
        }
    },
    getPageBucket: async (req, res) => {
        try {
            const { blogId, page = 1, pagesize = 1 } = req.query;
            const data = await bucketService.getPageBucket({
                blogId,
                page,
                pagesize,
            });
            return res.status(200).json({
                status: 'success',
                elements: data[0].comments,
                meta: {
                    pagesize,
                    count: data[0].count,
                },
            });
        } catch (error) {
            console.log(error);
        }
    },
};
module.exports = bucketController;
