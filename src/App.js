import React from 'react';
import './App.css';

import Movie from './components/popular-movies/Movie'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Movie />

      </Container>
    </React.Fragment>
  );
}

export default App;
