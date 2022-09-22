const express = require('express');
const router = express.Router();
const clubController = require('../controllers/club.controller');
router.post('/clubs', clubController.createClub);
module.exports = router;
