"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      order.belongsTo(
        models.User,

        {
          foreignKey: {
            name: "user_id",
            type: DataTypes.INTEGER,
            // allowNull: false,
          },
          onDelete: "CASCADE",
        }
      );
    }
  }

  order.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: DataTypes.INTEGER,
      track_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pick_up: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      drop_off: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      special_treatment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postman_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },

    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
