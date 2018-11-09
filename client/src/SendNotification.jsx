import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import './notification-bar.css'

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
  state = {}

  render() {
    return (
      <div className="notification-bar">
        <p>Send a notification using local state:</p>
        <Mutation mutation={INCREMENT_COUNT}>
          {incrementCount => {
            return (
              <button
                onClick={() => {
                  incrementCount()
                }}
              >
                Increment counter
              </button>
            )
          }}
        </Mutation>
        <Mutation mutation={DECREMENT_COUNT}>
          {decrementCount => {
            return (
              <button
                onClick={() => {
                  decrementCount()
                }}
              >
                Decrement counter
              </button>
            )
          }}
        </Mutation>
        <button>Say hello</button>
        <button>Say goodbye</button>
      </div>
    )
  }
}
