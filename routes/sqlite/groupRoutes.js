const express = require('express');
const router = express.Router();
const groupController = require('../../controllers/sqlite/groupController');
const groupMemberController = require('../../controllers/sqlite/groupMemberController');
const commentController = require('../../controllers/sqlite/commentController')
const likesController = require('../../controllers/sqlite/likesController');


router.post('/:groupId/posts/:postId/likes', likesController.createLike);

router.post('/create', groupController.createGroup);
router.get('/create', (req, res) => {
    const userId = req.cookies.userId;
    res.render('createGroup', { userId });
});
router.get('/', groupController.getGroups);

router.get('/:groupId', groupController.getGroup);


router.post('/:groupId/join', groupMemberController.joinGroup);
router.post('/:groupId/leave', groupMemberController.leaveGroup);


router.post('/:groupId/posts/:postId/comments', commentController.createComment);

module.exports = router;
