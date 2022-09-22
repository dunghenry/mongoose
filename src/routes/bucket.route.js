const express = require('express');
const router = express.Router();
const bucketController = require('../controllers/bucket.controller');
router.post('/buckets', bucketController.insertBucket);
router.get('/buckets', bucketController.getPageBucket);
module.exports = router;
