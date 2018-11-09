import React from 'react'
import { Query } from 'react-apollo'
import './notification-bar.css'

import { COUNT_QUERY } from './graphql-crud/queries'

export default () => (
  <Query query={COUNT_QUERY}>
    {({ loading, data }) => {
      if (loading) {
        return <h1>loading...</h1>
      }

      return <div className="notification-bar">Count: {data.count}</div>
    }}
  </Query>
)
