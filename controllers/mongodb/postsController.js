const Posts = require('../../models/mongodb/Posts');

exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Posts.find().populate('user_id');
      res.render('posts', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
};
exports.getPostsByUserId = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const posts = await Posts.find({ user_id: userId }).populate('user_id');
      res.render('posts', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
};
exports.createPost =  async (req, res) => {
    try {
      const post = await Posts.create({
        user_id: req.body.user_id,
        text: req.body.content
      });
  
      // res.status(201).json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
    res.redirect('/profile/'+req.body.user_id);
  };

  exports.deletePost = async (req, res) => {
    try {
      const postId = req.params.id;
      await Posts.findByIdAndDelete(postId);
      res.status(200).json({ message: 'Пост успешно удален' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  };