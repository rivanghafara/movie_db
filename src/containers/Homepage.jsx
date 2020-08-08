import React, { useEffect, useState } from 'react'
import { getPopularMovie, getGenres, getMoviesByGenre } from '../actions/index'

import Moviebox from '../components/Moviebox'
import {GenresList } from '../components/Genres'
import { useParams } from 'react-router-dom'

function Homepage() {
    let { id } = useParams()
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => {
        if (id === undefined || id === '0') {
            getPopularMovie(setMovies)
        } else {
            getMoviesByGenre(setMovies, id)
        }
        getGenres(setGenres)
    }, [id])

    useEffect(() => {
        getGenres(setGenres)
    }, [])

    return (
        <>
            {
                movies.map(movie => (
                    < Moviebox {...movie} key={movie.id} />
                ))
            }
            {
                genres.map(genre => (
                    <GenresList {...genre} key={genre.id} />
                ))
            }

        </>
    )
}


export default Homepage
