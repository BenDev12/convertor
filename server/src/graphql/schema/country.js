import { gql } from 'apollo-server-express';

const countrySchema = gql`
    extend type Query {
        country(name: String!): Country!
        getList:[ list]
    }
    extend type Mutation {
        createList(name: String!, population: Int!, rates: Float!): Creation!
    }

    type Country {
        id: ID!
        name: String!
        population: Int!
        currencies: [String]
        rates: Float!
    }
    type Currencies {
        code: String!
        name: [String!]!
        symbol: String!
    }
    type list {
        _id:ID!
        name: String!
        population: Int!
        rates: Float!
    }
    type Creation {
        country: Country
        message: String
    }
`;
export default countrySchema;
