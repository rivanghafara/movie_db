import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { MemoGenres } from '../components/GenresList'
import { CastList } from '../components/CastList'
import { fetchingMoviesById } from '../utils/fetching'

function Details() {
  let { id } = useParams()
  const [movie, setMovie] = useState([])
  const [movieGenres, setMovieGenres] = useState(undefined)
  const [movieCasts, setMovieCasts] = useState(undefined)

  useEffect(() => {
    fetchingMoviesById(setMovie, id)
  }, [id])

  useEffect(() => {
    setMovieGenres(movie)
  }, [movie])

  useEffect(() => {
    setMovieCasts(movie.credits)
  }, [movie.credits])

  if (movieGenres === undefined) return (<h3> Loading... </h3>)
  if (movieCasts === undefined) return (<h3> Loading... </h3>)

  return (
    <>
      <h1>{movie.title}</h1>
      <h2>{movie.overview}</h2>
      <h3>{movie.vote_average}</h3>
      <MemoGenres {...movieGenres} />
      <img src={(`https://image.tmdb.org/t/p/w400${movie.poster_path}`)} alt={(`${movie.title} poster`)} />
      <CastList {...movieCasts} />
    </>
  )
}

export default Details