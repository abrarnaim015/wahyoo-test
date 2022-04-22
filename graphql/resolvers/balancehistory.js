const { BalanceHistory, UserBank } = require("../../database/models");
const { AuthenticationError } = require("apollo-server-express");

module.exports = {
  Mutation: {
    async depositBalanceHistory(_, { type, balance }, { user }) {
      if (!user) {
        throw new AuthenticationError("You must login to create a post");
      }
      const userBankData = await UserBank.findByPk(user.id);
      userBankData.update({ balance: userBankData.balance + balance });
      return BalanceHistory.create({
        userbankId: user.id,
        type,
        balance,
      });
    },

    async withdrawBalanceHistory(_, { type, balance }, { user }) {
      if (!user) {
        throw new AuthenticationError("You must login to create a post");
      }
      const userBankData = await UserBank.findByPk(user.id);
      if (userBankData.balance - balance <= 0)
        throw new AuthenticationError("the balance you have is not enough");
      userBankData.update({ balance: userBankData.balance - balance });
      return BalanceHistory.create({
        userbankId: user.id,
        type,
        balance,
      });
    },
  },

  Query: {
    async getAllBalanceHistoryes(root, args, context) {
      const filterInclude = { model: UserBank, as: "author" };
      const balanceData = await BalanceHistory.findAll({
        include: filterInclude,
      });
      return balanceData;
    },
    async getSingleBalanceHistoryes(_, { BalanceHistoryId }, context) {
      return BalanceHistory.findByPk(BalanceHistoryId, {
        include: { model: UserBank, as: "author" },
      });
    },
  },

  // BalanceHistory: {
  //   author(balanceHistory) {
  //     return balanceHistory.getAuthor();
  //   },
  // },

  // async balanceHistory({ type, balance, user, role }) {
  //   if (!user) {
  //     throw new AuthenticationError("You must login to create a post");
  //   }
  //   const balanceData =
  //     role === "wd"
  //       ? userBankData.balance - balance
  //       : userBankData.balance + balance;
  //   const userBankData = await UserBank.findByPk(user.id);
  //   if (balanceData <= 0)
  //     throw new AuthenticationError("the balance you have is not enough");
  //   userBankData.update({ balance: balanceData });
  //   return BalanceHistory.create({
  //     userbankId: user.id,
  //     type,
  //     balance,
  //   });
  // },
};
