const express = require('express');
const router = express.Router();
const pagingController = require('../controllers/paging.controller');
router.post('/comment', pagingController.insertComment);
router.post('/comments', pagingController.insertComments);
router.get('/comments', pagingController.list);
router.get('/hacknews', pagingController.listHackNews);
module.exports = router;
