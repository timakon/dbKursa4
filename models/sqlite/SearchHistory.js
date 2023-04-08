const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config');

const SearchHistory = sequelize.define('SearchHistory', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  searchTerm: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = SearchHistory;