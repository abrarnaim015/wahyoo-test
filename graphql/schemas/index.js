const { gql } = require("apollo-server-express");
const userbankType = require("./userbank");
const balanceHistoryType = require("./bankhistoryes");

const rootType = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = [rootType, userbankType, balanceHistoryType];
