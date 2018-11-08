import { GraphQLServer } from 'graphql-yoga'
import { all } from 'starwars-names'

const typeDefs = `
  type Name {
    firstName: String
    lastName: String
  }
  type Query {
    names(name: String): [Name]
  }
`

const resolvers = {
  Query: {
    names: (_, { name }) =>
      all
        .filter(value => value.toLowerCase().includes(name.toLowerCase()))
        .map(value => ({ firstName: value.split(' ')[0], lastName: value.split(' ')[1] })),
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
