import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import TvPage from './pages/Homepage/TvHomepage'
import Example from './pages/example';
// import Movie from './components/Movie'
import MovieDetails from './pages/Movies-Page/Movie-Details'
import TvDetails from './pages/TV-Page/TV-Details'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}>
        <Redirect to="/movies" />
      </Route>
      <Route exact path='/movies' component={Homepage} />
      <Route exact path='/movies/:id' component={MovieDetails} />
      <Route exact path='/example' component={Example} />
      {/* <Route exact path='/tv'component={TvPage} />
      <Route exact path='/tv/:id'component={TvDetails} /> */}
    </Switch>
  );
}

export default App;
