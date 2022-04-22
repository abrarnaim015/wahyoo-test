"use strict";
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const UserBank = sequelize.define(
    "UserBank",
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      balance: {
        type: DataTypes.INTEGER,
      },
    },
    {
      defaultScope: {
        rawAttributes: { exclude: ["password"] },
      },
    }
  );

  UserBank.beforeCreate(async (user) => {
    user.password = await user.generatePasswordHash();
    user.balance = 500000;
  });
  UserBank.prototype.generatePasswordHash = function () {
    if (this.password) {
      return bcrypt.hash(this.password, process.env.BCRYPT);
    }
  };
  UserBank.associate = function (models) {
    // associations can be defined here
    UserBank.hasMany(models.BalanceHistory, {
      foreignKey: "userbankId",
      as: "balanceHistories",
    });
  };
  return UserBank;
};
