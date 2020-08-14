import React, { useContext } from 'react';
import './App.css';
import Homepage from './pages/Homepage'
import Details from './pages/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MenuContext } from './context/MenuContext'
import { fetchingGenre } from './utils/fetching';
import { MemoGenres } from './components/GenresList';
import { navGenres } from './utils/navGenres'

function App() {
  const [{ genresList }, dispatch] = useContext(MenuContext)

  async function startFetching() {
    const value = await fetchingGenre()
    dispatch({ type: 'FETCHING_MOVIE', payload: value.data })
  }

  if (genresList.genres === undefined) { startFetching() }

  return (
    <>
      <div className="App">
        <Router>
          <MemoGenres {...navGenres} />
          <MemoGenres {...genresList} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shows/:id" component={Details} />
            <Route exact path="/genres/:id" component={Homepage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
