# Introduction

This is a quick demo to show how Apollo Client and GraphQL work together.

There's a server and client folder.

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
