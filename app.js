const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    recommendRoutes: [Route]
    popularRoutes: [Route]
    route(id: Int!): Route
  }

  type Mutation {
    createRoute(route: RouteInput): Route
    updateRoute(id: Int!, route: RouteInput): Route
    deleteRoute(id: Int!): Route
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

  input RouteInput {
    id: Int
    title: String
    info: String
    traveller: String
    duration: String
    cost_est: String
    copied: Int
    imageUrl: String
    center: LocationInput
    visits: [VisitInput]
  }

  type Location {
    lat: Float
    lng: Float
  }

  input LocationInput {
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

  input VisitInput {
    id: String
    seq: Int
    commute: String
    date: String
    start: Float
    end: Float
    title: String
    info: String
    url: String
    position: LocationInput
  }
`)

const data = require('./data')

// The root provides a resolver function for each API endpoint
const root = {
  route: ({ id }) => {
    return data.routes.find(r => r.id === id)
  },
  recommendRoutes: () => {
    return data.routes.slice(0, 2)
  },
  popularRoutes: () => {
    return data.routes.slice(3)
  },
  createRoute: ({route}) => {
    route.id = ++data.lastId
    data.routes.push(route)
    return route
  },
  updateRoute: ({id, route}) => {
    const existingRoute = root.route({id: id})
    if (!existingRoute) {
      throw new Error('No route exists with id ' + id)
    }
    return Object.assign(existingRoute, route)
  },
  deleteRoute: ({id}) => {
    const existingRoute = root.route({id: id})
    if (!existingRoute) {
      throw new Error('No route exists with id ' + id)
    }
    const routeIndex = data.routes.findIndex(r => r.id === id)
    data.routes.splice(routeIndex, 1)
    return existingRoute
  }
}

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.listen(process.env.PORT || 4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
