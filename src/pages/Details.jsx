import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { MenuContext } from '../context/MenuContext'
import { GenreList } from '../components/GenreList'

import { fetchingMoviesById } from '../actions/fetching'

function Details() {
  let { id } = useParams()
  const [movie, setMovie] = useState([])
  const [movieGenres, setMovieGenres] = useState(undefined)
  const [movieCasts, setMovieCasts] = useState(undefined)
  const context = useContext(MenuContext)

  useEffect(() => {
    fetchingMoviesById(setMovie, id)
  }, [id])

  useEffect(() => {
    setMovieGenres(movie.genres)
  }, [movie.genres])

  useEffect(() => {
    setMovieCasts(movie.credits)
  }, [movie.credits])


  if (movieGenres === undefined) return (<h3> Loading... </h3>)
  if (movieCasts === undefined) return (<h3> Loading... </h3>)

  return (
    <>
      <GenreList {...context} />
      <h1>{movie.title}</h1>
      <h2>{movie.overview}</h2>
      <h3>{movie.vote_average}</h3>
      <GenreList {...movieGenres} />
      <img src={(`https://image.tmdb.org/t/p/w400${movie.poster_path}`)} alt={(`${movie.title} poster`)} />
      {movieCasts.cast.map(cast => (
        <h2 key={cast.id}>{cast.name} as <i>{cast.character}</i></h2>
      ))}
    </>
  )
}

export default Details