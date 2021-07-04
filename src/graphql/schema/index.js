import { gql } from 'apollo-server-express';

import userSchema from './user';
import countrySchema from './country';
import convertSchema from './converter'

const rootSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [rootSchema, userSchema, countrySchema, convertSchema];
