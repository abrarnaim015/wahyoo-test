// const request = require("supertest");
// const sinon = require("sinon");
const appContext = require("../graphql/context");
const { expect: takis } = require("chai");
const appResolversBalancehistory = require("../graphql/resolvers/balancehistory");
const appResolversUserbank = require("../graphql/resolvers/userbank");

describe("Initial Test", () => {
  describe("shoulg test appContext", () => {
    it("should appContext test success", () => {
      takis(appContext).to.be.a("function");
    });
  });

  describe("should test appResolversBalancehistory", () => {
    it("should depositBalanceHistory test success", () => {
      takis(appResolversBalancehistory.Mutation.depositBalanceHistory).to.be.a(
        "function"
      );
    });
    it("should withdrawBalanceHistory test success", () => {
      takis(appResolversBalancehistory.Mutation.withdrawBalanceHistory).to.be.a(
        "function"
      );
    });
    it("should getAllBalanceHistoryes test success", () => {
      takis(appResolversBalancehistory.Query.getAllBalanceHistoryes).to.be.a(
        "function"
      );
    });
    it("should appResolvers test success", () => {
      takis(appResolversBalancehistory.Query.getSingleBalanceHistoryes).to.be.a(
        "function"
      );
    });
  });

  describe("should test appResolversUserbank", () => {
    it("should loginBank test success", () => {
      takis(appResolversUserbank.Mutation.loginBank).to.be.a("function");
    });
    it("should registerBank test success", () => {
      takis(appResolversUserbank.Mutation.registerBank).to.be.a("function");
    });
    it("should userBankData test success", () => {
      takis(appResolversUserbank.Mutation.userBankData).to.be.a("function");
    });
  });
});
