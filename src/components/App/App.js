import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Main from "../Main/Main";
import AdminPanel from "../AdminPanel/AdminPanel";
import PlayListComponent from "../PlayList";
import withSession from "../withSession";

function App({refetch, user}) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Main } />
        <Route path="/admin" exact render={() => <PlayListComponent user={user} />} />
        <Route patn="/signin" exact render={() => <AdminPanel refetch={refetch} /> } />
        <Route render={() => <p>not found</p>} />
      </Switch>
    </Router>
  );
}
const AppWithSession = withSession(App);
export default AppWithSession;
