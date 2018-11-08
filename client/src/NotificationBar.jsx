// import React from 'react'
// import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'
// import './notification-bar.css'

// const mutation = gql`
//   mutation countQuery($count: Int) {
//     count(count: $count) @client {
//       count
//     }
//   }
// `

// export default () => (
//   <Mutation mutation={mutation}>
//     {(count, { data }) => {
//       console.log(count)
//       console.log(data)
//       return <div className="notification-bar" />
//     }}
//   </Mutation>
// )

import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import './notification-bar.css'

const query = gql`
  query countQuery($count: Int) {
    count(count: $count) @client {
      number
    }
  }
`

export default () => (
  <Query query={query}>
    {({ data, loading }) => {
      console.log(data)
      if (loading) {
        return <h1>loading...</h1>
      }

      return <div className="notification-bar">{data.count.number}</div>
    }}
  </Query>
)
