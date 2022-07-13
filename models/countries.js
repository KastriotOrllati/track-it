"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      countries.hasOne(models.User, {
        foreignKey: {
          name: "country_id",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
      countries.hasMany(models.cities, {
        foreignKey: {
          name: "country_id",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
    }
  }
  countries.init(
    {
      id: {
        type: DataTypes.INTEGER,

        primaryKey: true,
      },
      name: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "countries",
      timestamps: false,
    }
  );
  return countries;
};
