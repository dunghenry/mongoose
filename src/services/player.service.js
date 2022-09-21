const Player = require('../models/player.model');
const playerService = {
    createPlayer: async ({ name, age, clubs }) => {
        try {
            return await Player.create({ name, age, clubs });
        } catch (error) {
            console.log(error);
        }
    },
    getPlayer: async (id) => {
        try {
            // return await Player.findById(id)
            //     .populate('clubs', 'name -_id')
            //     .select('name age -_id'); // Lấy name, age của player, và lấy name của club
            // return await Player.findById(id).populate('clubs', 'name -_id'); //lấy ra name, bỏ _id
            return await Player.findById(id).populate('clubs', [
                'name',
                '_id',
                'createdAt',
            ]); //lấy ra những field name , id, createdAt
        } catch (error) {
            console.log(error);
        }
    },
    getPlayersWithLookup: async () => {
        try {
            return await Player.aggregate([
                {
                    $lookup: {
                        from: 'clubs',
                        localField: 'clubs',
                        foreignField: '_id',
                        as: 'clubs',
                    },
                },
                {
                    $unwind: '$clubs',
                },
                {
                    $project: {
                        clubs: {
                            name: '$clubs.name',
                            year: '$clubs.year',
                            createdAt: '$clubs.createdAt',
                            updatedAt: '$clubs.updatedAt',
                        },
                        name: 1,
                        year: 1,
                        createdAt: 1,
                        updatedAt: 1,
                    },
                },
            ]);
        } catch (error) {
            console.log(error);
        }
    },
    getPlayerWithGTAge: async (age) => {
        try {
            return await Player.aggregate([
                {
                    $match: { age: { $gt: +age } },
                },
            ]);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = playerService;
