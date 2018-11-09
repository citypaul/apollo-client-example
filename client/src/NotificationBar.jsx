import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import './notification-bar.css'

const query = gql`
  query countQuery($count: Int) {
    count @client {
      number
    }
  }
`

export default () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      console.log('notifaction bar data:', data)
      if (loading) {
        return <h1>loading...</h1>
      }

      if (error) {
        console.log('error: ', error)
      }

      return <div className="notification-bar">Count: {data.count.number}</div>
    }}
  </Query>
)
