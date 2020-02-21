import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Example from './pages/example';
// import Movie from './components/Movie'
import MovieDetails from './pages/Movies-Page/Movie-Details'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/example' component={Example} />
      <Route exact path='/:id'component={MovieDetails} />
    </Switch>
  );
}

export default App;
