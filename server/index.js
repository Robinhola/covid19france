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
    confirmed: NumbersPerRegion
    deaths: NumbersPerRegion
  }

  type NumbersPerRegion {
    total: Int
    europe: Int
    france: Int
    italy: Int
    china: Int
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  lastUpdated: () => {
    return storedData.cases.lastUpdated;
  },
  confirmed: () => {
    return storedData.cases.confirmed;
  },
  deaths: () => {
    return storedData.cases.deaths;
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://127.0.0.1:4000/graphql');

