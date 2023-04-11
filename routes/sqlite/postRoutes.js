
const express = require('express');
const router = express.Router({ mergeParams: true });
const postController = require('../../controllers/sqlite/postController');

router.post('/', postController.createPost);
router.get('/', postController.getGroupPosts);

module.exports = router;
