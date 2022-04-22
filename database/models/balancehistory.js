"use strict";

module.exports = (sequelize, DataTypes) => {
  const BalanceHistory = sequelize.define(
    "BalanceHistory",
    {
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userbankId: DataTypes.INTEGER,
    },
    {}
  );
  BalanceHistory.associate = function (models) {
    // associations can be defined here
    BalanceHistory.belongsTo(models.UserBank, {
      foreignKey: "userbankId",
      as: "author",
    });
  };
  return BalanceHistory;
};
