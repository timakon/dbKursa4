const express = require('express');
const router = express.Router();
const likeController = require('../../controllers/mongodb/likeController');

router.get('/:userId', likeController.getUserLikes);
router.post('/', likeController.addLike);
router.delete('/:id', likeController.removeLike);

module.exports = router;