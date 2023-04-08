const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/mongodb/postsController');

router.get('/', postsController.getAllPosts);
router.post('/', postsController.createPost);
router.get('/user/:id', postsController.getPostsByUserId);
router.delete('/:id', postsController.deletePost);

module.exports = router;
