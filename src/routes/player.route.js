const express = require('express');
const router = express.Router();
const playerController = require('../controllers/player.controller');
router.post('/players', playerController.createPlayer);
router.get('/players', playerController.getPlayersWithLookup);
router.get('/player', playerController.getPlayerWithGTAge);
router.get('/players/:id', playerController.getPlayer);
module.exports = router;
