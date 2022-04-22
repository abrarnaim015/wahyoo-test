const { gql } = require("apollo-server-express");

module.exports = gql`
  type BalanceHistory {
    id: Int!
    type: String!
    balance: Int!
    author: UserBank!
    createdAt: String
  }

  extend type Query {
    getAllBalanceHistoryes: [BalanceHistory!]
    getSingleBalanceHistoryes(BalanceHistoryId: Int!): BalanceHistory
  }

  extend type Mutation {
    depositBalanceHistory(
      type: String!
      balance: Int!
    ): CreateBalanceHistoryResponse
  }

  extend type Mutation {
    withdrawBalanceHistory(
      type: String!
      balance: Int!
    ): CreateBalanceHistoryResponse
  }

  type CreateBalanceHistoryResponse {
    id: Int!
    type: String!
    balance: Int!
    createdAt: String!
  }
`;
