import React, { useEffect, useState } from 'react'
import { getPopularMovie } from '../actions/index'

import Moviebox from '../components/Moviebox'

function Homepage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getPopularMovie(setMovies)
    }, [])

    return (
        movies.map(movie => (
            < Moviebox {...movie} key={movie.id} />
        ))
    )
}


export default Homepage
