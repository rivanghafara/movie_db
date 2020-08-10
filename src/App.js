import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage'
import Details from './pages/Homepage/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/genres/:id" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
