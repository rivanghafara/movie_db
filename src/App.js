import React from 'react';
import Main from './components/Main'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import Example from './pages/example';
import Movie from './pages/movie'


function App() {
  return (

    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/example' component={Example} />
      <Route exact path='/:id'component={Movie} />
    </Switch>
  );
}

export default App;
