const express = require('express');
const router = express.Router();


const likeRoutes = require('./mongodb/likeRoutes');
const searchHistoryRoutes = require('./sqlite/searchHistoryRoutes');
const imageViewRoutes = require('./sqlite/imageViewRoutes');
const userRoutes = require('./mongodb/userRoutes');
const followRoutes = require('./mongodb/followRoutes');
const groupRoutes = require('./sqlite/groupRoutes');
const eventRoutes = require('./sqlite/eventRoutes');

router.use('/users', userRoutes);
router.use('/follows', followRoutes);
router.use('/groups', groupRoutes);
router.use('/events', eventRoutes);
router.use('/search', searchHistoryRoutes);
router.use('/images', imageViewRoutes);
router.use('/likes', likeRoutes);

module.exports = router;
