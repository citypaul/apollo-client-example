import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import './notification-bar.css'

const mutation = gql`
  mutation countQuery($number: Int) {
    incrementCount(number: $number) @client {
      number
    }
  }
`

export default class NotificationBar extends Component {
  state = {}

  render() {
    return (
      <Mutation mutation={mutation}>
        {(incrementCount, { data }) => {
          console.log(data)
          return (
            <div className="notification-bar">
              <button
                onClick={() => {
                  incrementCount()
                }}
              >
                Do something!
              </button>
              <div>
                <p>Send a notification using local state:</p>
                <button>Say hello</button>
                <button>Say goodbye</button>
                <button>Increment counter</button>
                <button>Decrement counter</button>
              </div>
            </div>
          )
        }}
      </Mutation>
    )
  }
}
