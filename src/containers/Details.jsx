import React, { useEffect, useState } from 'react'
// import { getMovieById } from '../actions/index'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

async function DetailsPage() {
    const [movie, setMovie] = useState([])
    let { id } = useParams()
    
    useEffect(() => {
        // getMovieById(setMovie, id)
        const getMovieById = async () => {
            try {
                const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US`)
                setMovie(movie.data)
            } catch (error) {
                return error
            }
        }
        getMovieById()
    }, [id])
    
    console.log('hahaha =', movie);
    return (
        <>
            <h1>{movie.title}</h1>
            <h2>{movie.overview}</h2>
            <h3>{movie.vote_average}</h3>
            {/* <ul>
                {movie.genres.map(genre => (
                    <li>{genre}</li>
                ))}
            </ul> */}
        </>

    )
}
export default DetailsPage