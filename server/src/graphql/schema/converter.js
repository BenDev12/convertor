import { gql } from 'apollo-server-express';

const converterSchema = gql`
    extend type Query {
        latest(base: String!, symbols: [String]): conversionResponse!
    }
    extend type Mutation {
        convert(from: String!, to: String!, amount: Int!): conversionResponse!
    }
    type Errors{
        field:String!
        message:String!
    }
    type conversionResponse {
        rates: Float!
        base: String!
    }
`;
export default converterSchema;
