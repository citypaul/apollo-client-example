import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import './App.css'
import Search from './Search'
import NotificationBar from './NotificationBar'
import SendNotification from './SendNotification'
import apolloClient from './apollo-client-setup'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <NotificationBar />
          <SendNotification />
          <Search />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
