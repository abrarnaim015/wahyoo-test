const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { AuthenticationError } = require("apollo-server-express");
const { UserBank, BalanceHistory } = require("../../database/models");

module.exports = {
  Mutation: {
    async registerBank(root, args, context) {
      const { userName, email, password } = args.input;
      return UserBank.create({ userName, email, password });
    },

    async loginBank(root, { input }, context) {
      const { email, password } = input;
      const user = await UserBank.findOne({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, "mySecret");
        return { ...user.toJSON(), token };
      }
      throw new AuthenticationError("Invalid credentials");
    },

    async userBankData(root, { input }, context) {
      const { userName } = input;
      const user = await UserBank.findOne({
        where: { userName },
        include: { model: BalanceHistory, as: "balanceHistories" },
      });
      return user;
    },
  },
};
