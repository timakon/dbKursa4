const Follow = require('../../models/mongodb/Follow');

// Получить список подписчиков
exports.getFollowers = async (req, res) => {
  try {
    const followers = await Follow.find({ followingId: req.params.userId });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
