const Club = require('../models/club.model');
const clubService = {
    createClub: async ({ name, year }) => {
        try {
            return await Club.create({ name, year });
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = clubService;
