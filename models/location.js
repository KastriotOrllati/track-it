'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      Location.belongsTo(
        models.User,

        {
          foreignKey: {
            name: "postman_id",
            type: DataTypes.INTEGER,
            // allowNull: false,
          },
          onDelete: "CASCADE",
        }
      );
    }
  }
  Location.init({
    postman_id: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};