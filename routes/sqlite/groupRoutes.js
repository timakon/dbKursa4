const express = require('express');
const router = express.Router();
const groupController = require('../../controllers/sqlite/groupController');

router.post('/create', groupController.createGroup);
router.get('/create', (req, res) => {
    const userId = req.cookies.userId;
    res.render('createGroup', { userId });
});
router.get('/', groupController.getGroups);

router.get('/:groupId', groupController.getGroup);

module.exports = router;
