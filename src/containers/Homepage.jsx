import React, { useEffect, useState,  } from 'react'
import { getPopularMovie, getGenres, getMoviesByGenre } from '../actions/index'

import Moviebox from '../components/Moviebox'
import { MemoGenres } from '../components/Genres'


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
                genres.map(genre => (
                    // <GenresList {...genre} key={genre.id} isSelected={false} />
                    <MemoGenres {...genre} key={genre.id} />
                ))
            }
            {
                movies.map(movie => (
                    < Moviebox {...movie} key={movie.id}/>
                ))
            }
        </>
    )
}


export default Homepage
