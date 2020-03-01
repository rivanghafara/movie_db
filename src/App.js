import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Example from './pages/example';
import MovieDetails from './pages/Movies-Page/Movie-Details'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}>
        <Redirect to="/movies" />
      </Route>
      <Route exact path='/movies' component={Homepage} />
      <Route exact path='/movies/:id' component={MovieDetails} />
      <Route exact path='/example' component={Example} />
    </Switch>
  );
}

export default App;
