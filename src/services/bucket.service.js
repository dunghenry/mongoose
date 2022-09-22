const Bucket = require('../models/bucket.model');

const bucketService = {
    insertBucket: async ({ blogId, commentId, name, body, email }) => {
        try {
            const _blogId = new RegExp(`^${blogId}_`);
            return await Bucket.findOneAndUpdate(
                {
                    blogId: _blogId,
                    count: { $lt: 10 },
                },
                {
                    $push: {
                        comments: {
                            email,
                            commentId,
                            name,
                            body,
                        },
                    },
                    $inc: {
                        count: 1,
                    },
                    $setOnInsert: {
                        blogId: `${blogId}_${new Date().getTime()}`,
                    },
                },
                {
                    new: true,
                    upsert: true,
                },
            );
        } catch (error) {
            console.log(error);
        }
    },

    getPageBucket: async ({ blogId, page = 1, pagesize = 1 }) => {
        try {
            const _blogId = new RegExp(`^${blogId}_`);
            return await Bucket.find({ blogId: _blogId })
                .sort({ _id: 1 })
                .skip((page - 1) * pagesize)
                .limit(pagesize);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = bucketService;
