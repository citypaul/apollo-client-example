// docs: https://www.apollographql.com/docs/link/links/state.html
import { withClientState } from 'apollo-link-state'
import { COUNT_QUERY } from './graphql-crud/queries'

const defaults = {
  count: 0,
}

export default withClientState({
  defaults,
  resolvers: {
    Mutation: {
      incrementCount: (_, __, { cache }) => {
        let { count } = cache.readQuery({ query: COUNT_QUERY })
        count = count + 1

        const data = { count }
        cache.writeQuery({ query: COUNT_QUERY, data })

        return data
      },
      decrementCount: (_, __, { cache }) => {
        let { count } = cache.readQuery({ query: COUNT_QUERY })
        count = count - 1

        const data = { count }
        cache.writeQuery({ query: COUNT_QUERY, data })

        return data
      },
    },
  },
})
