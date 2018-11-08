import React, {Component} from 'react'
import {ApolloProvider} from 'react-apollo'
import logo from './logo.svg'
import './App.css'
import Search from './Search'
import apolloClient from './apollo-client'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <Search />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
