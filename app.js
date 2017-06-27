var express = require('express');
var cors = require('cors');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    recommendRoutes: [Route]
    popularRoutes: [Route]
    route(id: Int!): Route
  }

  type Route {
    id: Int!
    title: String
    info: String
    traveller: String
    duration: String
    cost_est: String
    copied: Int
    imageUrl: String
    center: Location
    visits: [Visit]
  }

  type Location {
    lat: Float
    lng: Float
  }

  type Visit {
    id: String!
    seq: Int
    commute: String
    date: String
    start: Float
    end: Float
    title: String
    info: String
    url: String
    position: Location
  }
`);

var data = require('./data');
// The root provides a resolver function for each API endpoint
var root = {
  route: ({id}) => {
      return data.routes.find(r => r.id === id);
  },
  recommendRoutes: () => {
    return data.routes.slice(0, 2);
  },
  popularRoutes: () => {
    return data.routes.slice(3);
  },
};

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');