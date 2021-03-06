const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const storedData = require('./data.json');

console.log("Data stored:") 
console.log(storedData);

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    lastUpdated: String
    source: String
    timeSerie: [CovidDataPoint!]
  }

  type NumbersPerRegion {
    total: Int
    europe: Int
    france: Int
    italy: Int
    china: Int
  }

  type CovidDataPoint {
    date: String!
    deaths: NumbersPerRegion
    confirmed: NumbersPerRegion 
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  source: () => storedData.cases.source,
  lastUpdated: () => storedData.cases.lastUpdated,
  timeSerie: () => storedData.cases.timeSerie,
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://127.0.0.1:4000/graphql');

