const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/sqlite');

const sequelize = new Sequelize(config);

const Group = sequelize.define('group', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ownerId: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Post = require('./Post');

Group.hasMany(Post, {
  foreignKey: 'groupId',
  as: 'posts'
});

Post.belongsTo(Group, {
  foreignKey: 'groupId',
  as: 'group'
});


const GroupMember = require('./GroupMember');

Group.hasMany(GroupMember, {
  foreignKey: 'groupId',
  as: 'members'
});

GroupMember.belongsTo(Group, {
  foreignKey: 'groupId',
  as: 'group'
});


// Добавьте этот код после объявления модели Group
(async () => {
  try {
    await sequelize.sync(); // Создает таблицу, если она не существует
    console.log('SQLite "groups" table has been created/checked.');
  } catch (error) {
    console.error('Error creating/checking SQLite "groups" table:', error);
  }
})();

module.exports = Group;
