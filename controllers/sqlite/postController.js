
const Post = require('../../models/sqlite/Post');

exports.createPost = async (req, res) => {

 console.log(req.body)
 console.log(req.params)
 console.log(req.cookies)
  
  try {
    const post = await Post.create({
      content: req.body.content,
      groupId: req.params,
      userId: req.cookies.userId
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

exports.getGroupPosts = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const posts = await Post.findAll({ where: { groupId } });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
