const Like = require('../../models/mongodb/Like');

exports.getUserLikes = async (req, res) => {
  try {
    const likes = await Like.find({ userId: req.params.userId });
    res.status(200).json(likes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addLike = async (req, res) => {
  try {
    const like = new Like(req.body);
    await like.save();
    res.status(201).json(like);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.removeLike = async (req, res) => {
  try {
    await Like.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Like removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};