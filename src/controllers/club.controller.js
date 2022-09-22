const clubService = require('../services/club.service');
const clubController = {
    createClub: async (req, res) => {
        const { name, year } = req.body;
        try {
            const newClub = await clubService.createClub({ name, year });
            return res.status(200).json(newClub);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = clubController;
