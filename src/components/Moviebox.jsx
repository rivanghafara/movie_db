import React from 'react'
import {
    Link
} from "react-router-dom";

function ShowGrid(props) {
    return (
        <Link to={(`/shows/${props.id}`)}>
            <h1 key={props.id}>{props.title}</h1>
        </Link>

    )
}

export default ShowGrid

