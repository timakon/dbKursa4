const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/sqlite');
const sequelize = new Sequelize(config);

const Comment = sequelize.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'posts',
      key: 'id',
      onDelete: 'CASCADE'
    }
  }
});

//const Post = require('./Post');

// Comment.belongsTo(Post, {
//   foreignKey: 'postId',
//   as: 'post'
// });

(async () => {
  try {
    await sequelize.sync();
    console.log('SQLite "comments" table has been created/checked.');
  } catch (error) {
    console.error('Error creating/checking SQLite "comments" table:', error);
  }
})();

module.exports = Comment;
