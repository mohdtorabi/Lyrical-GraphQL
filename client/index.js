import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import SongCreate from "./components/SongCreate";
import SongList from "./components/SongList";

const client = new ApolloClient({});

const Root = () => {
return (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SongList} />
      <Route path='songs/new' component={SongCreate} />
    </Route>
  </Router>
  </ApolloProvider>
)
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);