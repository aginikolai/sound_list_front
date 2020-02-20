import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';

import './index.css';
import App from './components/App/App';

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache
});
const link = ApolloLink.from([stateLink]);

const client = new ApolloClient({
  uri: 'http://localhost:2222/graphql',
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));
