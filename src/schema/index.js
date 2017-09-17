const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

/*const typeDefs = `
  type Link {
    id: ID!
    url: String!
    description: String!
  }

  type Query {
    allLinks: [Link!]!
  }
type Mutation {
  createLink(url: String!, description: String!): Link
}`;*/

const typeDefs = `
  type User {
    id: ID!
    name: String!
    lastname: String!
    initial: String!
  }

  type Query {
    displayName:[User!]!
  }

type Mutation {
  createUser(name: String!, lastname: String!): User
}`;


module.exports = makeExecutableSchema({typeDefs, resolvers});

