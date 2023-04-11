// models/sqlite/Post.js
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/sqlite');
const sequelize = new Sequelize(config);

const Post = sequelize.define('post', {
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
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Group',
      key: 'id',
      onDelete: 'CASCADE'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

(async () => {
  try {
    await sequelize.sync();
    console.log('SQLite "posts" table has been created/checked.');
  } catch (error) {
    console.error('Error creating/checking SQLite "posts" table:', error);
  }
})();

module.exports = Post;
