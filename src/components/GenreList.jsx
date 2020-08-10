import React from 'react'
import { Link } from "react-router-dom";

export const GenreList = (props) => {
    props = Object.values(props)
    if (props === undefined) return ''
    return (
        <>
            {props.map(genre => (
                <Link to={(`/genres/${genre.id}`)}>
                    <h1 key={genre.id}>{genre.name}</h1>
                </Link>
            ))}
        </>
    )
}
