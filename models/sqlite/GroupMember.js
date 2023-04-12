const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/sqlite');
const sequelize = new Sequelize(config);

const GroupMember = sequelize.define('groupMember', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'groups',
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
    console.log('SQLite "groupMembers" table has been created/checked.');
  } catch (error) {
    console.error('Error creating/checking SQLite "groupMembers" table:', error);
  }
})();

module.exports = GroupMember;
