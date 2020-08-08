import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Homepage from './containers/Homepage'
import DetailsPage from './containers/Details'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shows/:id" component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
