const express = require('express');
const router = express.Router();
const searchHistoryController = require('../../controllers/sqlite/searchHistoryController');

router.get('/:userId', searchHistoryController.getUserSearchHistory);
router.post('/', searchHistoryController.addSearchHistory);

module.exports = router;