"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cities.hasOne(models.User, {
        foreignKey: {
          name: "city_id",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });

      cities.belongsTo(models.countries, {
        foreignKey: {
          name: "country_id",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
    }
  }
  cities.init(
    {
      id: {
        type: DataTypes.INTEGER,

        primaryKey: true,
      },
      name: DataTypes.STRING,
      country_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cities",
      timestamps: false,
    }
  );
  return cities;
};
