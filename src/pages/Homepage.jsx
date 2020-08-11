import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { MenuContext } from '../context/MenuContext'
import { GenreList } from '../components/GenreList'
import { Moviebox } from '../components/Moviebox'

import { fetchingPopularMovies, fetchingMoviesByGenre } from '../actions/fetching'

function Homepage() {
  let { id } = useParams()
  const [movies, setMovies] = useState([])

  const context = useContext(MenuContext)

  useEffect(() => {
    if (id === undefined || id === '0') {
      fetchingPopularMovies(setMovies)
    } else {
      fetchingMoviesByGenre(setMovies, id)
    }
  }, [id])

  return (
    <>
      <GenreList {...context} />
      <Moviebox {...movies} />
    </>
  )
}

export default Homepage