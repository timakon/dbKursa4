const express = require('express');
const router = express.Router();
const imageViewController = require('../../controllers/sqlite/imageViewController');

router.get('/:userId/views', imageViewController.getUserImageViews);
router.post('/views', imageViewController.addView);

module.exports = router;