const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/sqlite');
const sequelize = new Sequelize(config);

const Like = sequelize.define('like', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

(async () => {
  try {
    await sequelize.sync();
    console.log('SQLite "likes" table has been created/checked.');
  } catch (error) {
    console.error('Error creating/checking SQLite "likes" table:', error);
  }
})();

module.exports = Like;