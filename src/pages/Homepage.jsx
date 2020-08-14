import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { Moviebox } from '../components/Moviebox'

import { fetchingPopularMovies, fetchingMoviesByGenre } from '../utils/fetching'

function Homepage() {
  let { id } = useParams()
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    if (id === undefined || id === '0') {
      fetchingPopularMovies(setMovies)
    } else {
      fetchingMoviesByGenre(setMovies, id)
    }
  }, [id])


  return (
    <>
      <Moviebox {...movies} />
    </>
  )
}

export default Homepage