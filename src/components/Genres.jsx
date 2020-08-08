import React from 'react'
import { Link } from "react-router-dom";

export const GenresList = (props) => {
    return (
        <Link to={(`/genres/${props.id}`)} >
            <h3>{props.name}</h3>
        </Link>
    )
}