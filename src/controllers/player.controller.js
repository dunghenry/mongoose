const playerService = require('../services/player.service');
const playerController = {
    createPlayer: async (req, res) => {
        const { name, age, clubs } = req.body;
        try {
            const newPlayer = await playerService.createPlayer({
                name,
                age,
                clubs,
            });
            return res.status(200).json(newPlayer);
        } catch (error) {
            console.log(error);
        }
    },
    getPlayer: async (req, res) => {
        const id = req.params.id;
        try {
            const player = await playerService.getPlayer(id);
            return res.status(200).json(player);
        } catch (error) {
            console.log(error);
        }
    },
    getPlayersWithLookup: async (req, res) => {
        try {
            const players = await playerService.getPlayersWithLookup();
            return res.status(200).json(players);
        } catch (error) {
            console.log(error);
        }
    },
    getPlayerWithGTAge: async (req, res) => {
        const { age } = req.query;
        try {
            const data = await playerService.getPlayerWithGTAge(age);
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = playerController;
