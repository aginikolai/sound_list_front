import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Main from "../Main/Main";
import AdminPanel from "../AdminPanel/AdminPanel";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Main } />
        <Route patn="/adminpanel" exact component={AdminPanel} />
        <Route component={ () => (<div>Not found</div>) } />
      </Switch>
    </Router>
  );
}

export default App;
