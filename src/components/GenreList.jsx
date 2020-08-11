import React from 'react'
import { Link } from "react-router-dom";

export const GenreList = (props) => {
    props = Object.values(props)
    if (props === undefined) return (<h3>Loading...</h3>)
    return (
        <>
            {props.map(genre => (
                <Link to={(`/genres/${genre.id}`)} key={genre.id}>
                    <h3>{genre.name}</h3>
                </Link>
            ))}
        </>
    )
}
