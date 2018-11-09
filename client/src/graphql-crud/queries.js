import gql from 'graphql-tag'

export const COUNT_QUERY = gql`
  query countQuery {
    count @client
  }
`
