const express = require('express');
const router = express.Router();
const followController = require('../../controllers/mongodb/followController');

router.get('/:userId/followers', followController.getFollowers);

module.exports = router;
