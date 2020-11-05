import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        country(country: String): Country
        countries(filter: String, search: String, sort: Int, skip: Int): [Country!]!
        getVisitors(country:String): [String]
        getVisitedCountries(username: String): [Country]
    }
    
    extend type Mutation {
        addVisitor(username: String, country: String): Country
    }
   
    type Country {
        _id: ID!
        country: String!
        continent: String
        city: String
        dish: String
        visitedAt: String
        users: [String]
    }
    
`


