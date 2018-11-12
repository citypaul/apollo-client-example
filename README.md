# Introduction

This is a quick demo to show how Apollo Client and GraphQL work together, also how we can use `apollo-link-state` for local state management, in such a way that Redux (and other state management libraries) can be removed in favour of using Apollo Client as a single source of truth for everything.

There's a server and client folder. The server sets up a simple API that uses a star wars names database (actually just a `json` file) to run queries against.

In the below image, the search box queries GraphQL by making a network request, and the increment/decrement buttons update the state of a sibling component using `apollo-link-state`:

![nov-09-2018 13-42-43](https://user-images.githubusercontent.com/5850178/48265814-7012c000-e425-11e8-84ec-aeda1b5caaeb.gif)

To install:

## Server

`cd` into the `/server` folder.

`yarn install`

`yarn dev`

Visit http://localhost:4000 to see the GraphQL playground.

Here's a query you can use:

```gql
query searchQuery($name: String) {
  names(name: $name) {
    firstName
    lastName
  }
}
```

In the "QUERY VARIABLES" panel, add this:

```json
{
  "name": "lu"
}
```

## Client

`cd` into the `/client` folder.

`yarn install`

`yarn start`

The server has a json file containing a list of Star Wars character names.

The client will query this. It should all just work.

Visit http://localhost:3000
