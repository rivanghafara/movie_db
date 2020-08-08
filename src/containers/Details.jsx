import React, { useEffect, useState } from 'react'
import { getMovieById } from '../actions/index'

import { GenresList } from '../components/Genres'

import { useParams } from "react-router-dom";

function DetailsPage() {
    const [movies, setMovie] = useState([])
    const [genres, setGenres] = useState([])
    const [casts, setCasts] = useState([])
    let { id } = useParams()

    useEffect(() => {
        getMovieById(setMovie, id)
    }, [id])

    useEffect(() => {
        setGenres(movies.genres)
        setCasts(movies.credits)
    }, [movies])

    const release_date = new Date(movies.release_date)
    if (genres === undefined) return ''
    if (casts.cast === undefined) return ''
    if (release_date === isNaN) return ''

    return (
        <>
            <h1>{movies.title} ({release_date.getFullYear()})</h1>
            <h2>{movies.overview}</h2>
            <h2>{movies.runtime} min.</h2>
            <h2>{movies.vote_average}</h2>
            {genres.map(genre => (
                <GenresList key={genre.id} {...genre} />
            ))}
            <img src={(`https://image.tmdb.org/t/p/w400${movies.poster_path}`)} alt={(`${movies.title} poster`)} />
            {casts.cast.map(cast => (
                <h2 key={cast.id}>{cast.name} as <i>{cast.character}</i></h2>
            ))}
        </>
    )
}
export default DetailsPage

