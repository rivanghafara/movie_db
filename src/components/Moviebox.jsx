import React from 'react'
import { Link } from "react-router-dom";

export const Moviebox = (props) => {
    if (props === undefined) return (<h3>Loading...</h3>)
    props = Object.values(props)
    return (
        props.map(movie => (
            <Link to={(`/shows/${movie.id}`)} key={movie.id}>
                <h1>{movie.title}</h1>
            </Link>
        ))

    )
}

