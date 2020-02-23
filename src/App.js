import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import TvPage from './pages/Homepage/TvHomepage'
import Example from './pages/example';
// import Movie from './components/Movie'
import MovieDetails from './pages/Movies-Page/Movie-Details'
import TvDetails from './pages/TV-Page/TV-Details'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/example' component={Example} />
      <Route exact path='/tv'component={TvPage} />
      <Route exact path='/:id'component={TvDetails} />
    </Switch>
  );
}

export default App;
