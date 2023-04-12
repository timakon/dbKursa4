
const Post = require('../../models/sqlite/Post');

exports.createPost = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const userId = req.body.user_id;
    const content = req.body.content;
    const newPost = {
      content: content,
      userId: userId,
      groupId: groupId,
    };

    await Post.create(newPost);

    // Перенаправляем пользователя на страницу группы после создания поста
    res.redirect(`/groups/${groupId}`);
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
