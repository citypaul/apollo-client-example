// docs: https://www.apollographql.com/docs/link/links/state.html
import { withClientState } from 'apollo-link-state'
import { COUNT_QUERY } from './graphql-crud/queries'

const typeDefs = `
  type Count {
    number: Int!
  }

  type Query {
    count: Count!
  }

  type Mutation {
    incrementCount(): Count
    decrementCount(): Count
  }
`

const defaults = {
  count: 0,
}

export default cache =>
  withClientState({
    cache,
    // typeDefs,
    defaults,
    resolvers: {
      Mutation: {
        incrementCount: (_, __, { cache }) => {
          let { count } = cache.readQuery({ query: COUNT_QUERY })
          count = count + 1
          cache.writeQuery({ query: COUNT_QUERY, data: { count } })
          return {}
        },
        decrementCount: (_, __, { cache }) => {
          let { count } = cache.readQuery({ query: COUNT_QUERY })
          count = count - 1
          cache.writeQuery({ query: COUNT_QUERY, data: { count } })
          return {}
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
