const express = require('express');
const router = express.Router();
const searchHistoryController = require('../../controllers/sqlite/searchHistoryController');

router.get('/:userId/history', searchHistoryController.getUserSearchHistory);
router.post('/history', searchHistoryController.addSearchHistory);

module.exports = router;