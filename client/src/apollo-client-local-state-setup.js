// docs: https://www.apollographql.com/docs/link/links/state.html
import { withClientState } from 'apollo-link-state'

const typeDefs = `
  type Count {
    number: Int!
  }

  type Query {
    count: Count!
  }

  type Mutation {
    incrementCount(number: Int): Count
    decrementCount(number: Int): Count
  }
`

const defaults = {
  count: {
    number: 1,
    __typename: 'Count',
  },
}

export default cache =>
  withClientState({
    cache,
    typeDefs,
    defaults,
    resolvers: {
      Mutation: {
        count: (_, { count = 0 }, { cache }) => {
          const data = {
            __typename: 'Count',
            count,
          }

          cache.writeData({ data })
          return null
        },
        // updateNetworkStatus: (_, { isConnected }, { cache }) => {
        //   const data = {
        //     networkStatus: {
        //       __typename: 'NetworkStatus',
        //       isConnected,
        //     },
        //   }
        //   cache.writeData({ data })
        //   return null
        // },
      },
    },
  })
