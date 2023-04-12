const Comment = require('../../models/sqlite/Comment');
const Post = require('../../models/sqlite/Post');

exports.createComment = async (req, res) => {
  try {
    const content = req.body.content;
    const userId = req.cookies.userId;
    const postId = req.params.postId;

    const post = await Post.findByPk(postId);


    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    console.log("=================")
    console.log(content, userId, postId)

    await Comment.create({
        content,
        userId,
        postId
      });

    res.redirect(`/groups/${post.groupId}`);
    // res.redirect(`/groups`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};