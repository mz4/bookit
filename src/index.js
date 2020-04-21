import "./styles.scss";

import { InMemoryCache } from "apollo-cache-inmemory";

import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
const URI = "https://apollo-graphql-todo.glitch.me/graphql"; //replace with your own graphql URI

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

const client = new ApolloClient({
  cache,
  uri: URI
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
