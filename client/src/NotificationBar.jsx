import React from 'react'
import { Query } from 'react-apollo'
import './notification-bar.css'

import { COUNT_QUERY } from './graphql-crud/queries'

export default () => (
  <Query query={COUNT_QUERY}>
    {({ loading, error, data }) => {
      console.log('notifaction bar data:', data)
      if (loading) {
        return <h1>loading...</h1>
      }

      if (error) {
        console.log('error: ', error)
      }

      return <div className="notification-bar">Count: {data.count}</div>
    }}
  </Query>
)
