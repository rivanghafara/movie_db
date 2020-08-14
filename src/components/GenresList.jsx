import React from 'react'
import { Link } from "react-router-dom";

export const GenresList = (props) => {
    if (props.genres === undefined) return (<h3>Loading...</h3>)
    if (props === undefined) return (<h3>Loading...</h3>)
    if (props.genres.lenght === 1) return <h3>{props.genres.id}</h3>
    return (
        <>
            {props.genres.map(genre => (
                <Link to={(`/genres/${genre.id}`)} key={genre.id}>
                    <h3>{genre.name}</h3>
                </Link>
            ))}
        </>
    )
}

export const MemoGenres = React.memo(GenresList)