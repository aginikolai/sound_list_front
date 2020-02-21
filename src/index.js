import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient  from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.css';
import App from './components/App/App';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:2222/graphql',
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));
