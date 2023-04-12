const Like = require('../../models/sqlite/Like');
const Post = require('../../models/sqlite/Post');

exports.createLike = async (req, res) => {
    try {
        const userId = req.cookies.userId;
        const postId = req.params.postId;
    
        const post = await Post.findByPk(postId);
    
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
    
        const existingLike = await Like.findOne({ where: { userId, postId } });
    
        if (existingLike) {
          await existingLike.destroy();
        } else {
          await Like.create({
            userId,
            postId
          });
        }
    
        res.redirect(`/groups/${post.groupId}`);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
  };