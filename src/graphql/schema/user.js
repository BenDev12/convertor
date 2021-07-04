import {gql} from 'apollo-server-express'

const userSchema = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
  }
  type Token {
    status:Int!
    token: String!
  }

  extend type Query {
    fetchUser(email:String!): User!
  }
  extend type Mutation {
    signUp(name: String!, email: String!, password: String!): User!
    signIn(email: String!, password: String!): Token!
  }
`;
export default userSchema;
