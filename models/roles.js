"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here

      roles.hasOne(models.User, {
        foreignKey: {
          name: "role_id",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
    }
  }
  roles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      roleName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "roles",
      timestamps: false,
    }
  );
  return roles;
};
