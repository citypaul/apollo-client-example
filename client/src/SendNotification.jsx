import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import './send-notification-bar.css'

const INCREMENT_COUNT = gql`
  mutation {
    incrementCount @client
  }
`

const DECREMENT_COUNT = gql`
  mutation {
    decrementCount @client
  }
`

export default class NotificationBar extends Component {
  render() {
    return (
      <div className="send-notification-bar">
        <p>🔥🔥 Send a notification using local state: 🔥🔥</p>
        <Mutation mutation={INCREMENT_COUNT}>
          {incrementCount => {
            return <button onClick={incrementCount}>Increment counter</button>
          }}
        </Mutation>
        <Mutation mutation={DECREMENT_COUNT}>
          {decrementCount => {
            return <button onClick={decrementCount}>Decrement counter</button>
          }}
        </Mutation>
      </div>
    )
  }
}
