const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');
router.post('/events', eventController.insertEvent);
router.post('/atoms', eventController.atomicInsert);
module.exports = router;
