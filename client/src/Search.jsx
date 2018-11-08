import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  query searchQuery($name: String) {
    names(name: $name) {
      firstName
      lastName
    }
  }
`

const getNames = names =>
  names.map(({ firstName, lastName }) => <p key={`${firstName}-${lastName}`}>{`${firstName} ${lastName}`}</p>)

export default class Search extends Component {
  state = {
    name: '',
  }

  getSearch = ({ names }) => <div>{getNames(names)}</div>

  render() {
    const { name } = this.state

    return (
      <div>
        <input
          type="text"
          autoFocus
          placeholder="search for a name..."
          value={this.state.name}
          onChange={e => {
            this.setState({
              name: e.target.value,
            })
          }}
        />
        <Query query={query} variables={{ name }}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>
            }

            return this.getSearch(data)
          }}
        </Query>
      </div>
    )
  }
}
