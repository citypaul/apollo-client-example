// docs: https://www.apollographql.com/docs/link/links/state.html
import { withClientState } from 'apollo-link-state'
import gql from 'graphql-tag'

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
    number: 0,
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
        incrementCount: (_, { number }, { cache }) => {
          const data = {
            number: 1,
            __typename: 'Count',
          }

          // cache.writeData({ data })
          console.log('x cache:', cache.readData())
          return data
        },
      },
      // Query: {
      //   count: () => {
      //     // const query = gql`
      //     //   query countQuery($count: Int) {
      //     //     count(count: $count) @client {
      //     //       number
      //     //     }
      //     //   }
      //     // `
      //     // console.log('read data:', cache.readData({ query, variables: { number: 55 } }))
      //     return {
      //       number: 3,
      //       __typename: 'Count',
      //     }
      //     // return cache.readData()

      //     // return
      //   },
      // },
      // Mutation: {
      //   count: (_, { count = 0 }, { cache }) => {
      //     const data = {
      //       __typename: 'Count',
      //       count,
      //     }
      //     cache.writeData({ data })
      //     return null
      //   },
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
      // },
    },
  })
