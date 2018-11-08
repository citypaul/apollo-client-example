// docs: https://www.apollographql.com/docs/link/links/state.html
import { withClientState } from 'apollo-link-state'

export default cache =>
  withClientState({
    cache,
    resolvers: {
      Mutation: {
        count: (_, { count }, { cache }) => {
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
