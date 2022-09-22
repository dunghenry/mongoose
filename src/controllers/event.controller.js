const eventService = require('../services/event.service');
const eventController = {
    insertEvent: async (req, res) => {
        const { userId } = req.body;
        try {
            const data = await eventService.insertEvent({ userId });
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    },
    atomicInsert: async (req, res) => {
        const { userId } = req.body;
        try {
            const data = await eventService.atomicInsert({ userId });
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    },
};
module.exports = eventController;
