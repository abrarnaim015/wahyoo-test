// const { AuthenticationError } = require("apollo-server-errors");
// const { BalanceHistory, UserBank } = require("../database/models");

// const balanceHistory = async ({ type, balance, user, role }) => {
//   console.log({ type, balance, user, role });
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
// };

// module.exports = balanceHistory;
