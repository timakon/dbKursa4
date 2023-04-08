const express = require('express');
const router = express.Router();
const imageViewController = require('../../controllers/sqlite/imageViewController');

router.get('/:userId', imageViewController.getUserImageViews);
router.post('/', imageViewController.addImageView);

module.exports = router;