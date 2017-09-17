const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type User {
    id: ID!
    name: String!
    lastname: String!
    initial: String!
    profitable: Int!
  }

  type Query {
    displayName:[User!]!
    profitableUserss:[User!]!
  }

  type Mutation {
  createUser(name: String!, lastname: String!): User
  }`;


module.exports = makeExecutableSchema({typeDefs, resolvers});

