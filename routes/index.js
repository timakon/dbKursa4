const express = require('express');
const router = express.Router();



const userRoutes = require('./mongodb/userRoutes');
const profileRoutes = require('./mongodb/profileRoutes');
const postsRoutes = require('./mongodb/postsRoutes');


router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
router.use('/posts', postsRoutes);


const groupRoutes = require('./sqlite/groupRoutes');
const groupPostRoutes = require('./sqlite/postRoutes');

router.use('/groups', groupRoutes);
router.use('/groups/:groupId/posts', groupPostRoutes);


module.exports = router;
