const { Event } = require('../models/comment.model');
const eventService = {
    insertEvent: async ({ userId }) => {
        try {
            const isEvent = await Event.findOne({ userId });
            if (isEvent) {
                return {
                    code: 201,
                    message: 'User already',
                };
            }
            return Event.create({ userId });
        } catch (error) {
            console.log(error);
        }
    },
    atomicInsert: async ({ userId }) => {
        try {
            const event = await Event.findOneAndUpdate(
                { userId },
                {
                    $set: {
                        time: new Date(),
                    },
                },
                {
                    new: false,
                    upsert: true,
                },
            );
            return {
                code: 200,
                message: !event ? 'User ok!' : 'User already',
            };
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = eventService;
