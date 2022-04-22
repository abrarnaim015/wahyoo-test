const { gql } = require("apollo-server-express");

module.exports = gql`
  type UserBank {
    id: Int!
    userName: String!
    email: String!
    password: String!
    balance: Int!
    balanceHistories: [BalanceHistory!]
  }

  extend type Mutation {
    registerBank(input: RegisterInputBank!): RegisterResponseBank
    loginBank(input: LoginInputBank!): LoginResponseBank
    userBankData(input: UserInputBank): UserBank
  }

  input UserInputBank {
    userName: String!
  }

  type RegisterResponseBank {
    id: Int!
    userName: String!
    email: String!
  }

  input RegisterInputBank {
    userName: String!
    email: String!
    password: String!
  }

  input LoginInputBank {
    email: String!
    password: String!
  }

  type LoginResponseBank {
    id: Int!
    userName: String!
    email: String!
    token: String!
  }
`;
