const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config');

const ImageView = sequelize.define('ImageView', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  imageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Image',
      key: 'id',
    },
  },
  viewCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = ImageView;