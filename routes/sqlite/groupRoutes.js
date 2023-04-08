const express = require('express');
const router = express.Router();
const groupController = require('../../controllers/sqlite/groupController');

router.post('/create', groupController.createGroup);
router.get('/', groupController.getGroups);

module.exports = router;
