import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Main from "../Main/Main";
import PlayListComponent from "../PlayList";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Main } />
        <Route path="/admin" exact component={ PlayListComponent } />
      </Switch>
    </Router>
  );
}

export default App;
