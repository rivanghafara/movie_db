import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";


function ShowGrid(props) {
    let {url } = useRouteMatch();
    return (
        <Link to={(`${url}/${props.id}`)} key={props.id}>
            <div className="max-w-lg rounded overflow-hidden shadow-lg" key={props.id}>
                <img className="transition duration-300 ease-in-out hover:opacity-50 transform hover:-translate-y-1 hover:scale-110" src={(`https://image.tmdb.org/t/p/w500${props.poster_path}`)} alt={props.title}></img>
            </div>
        </Link >
    )
}

export default ShowGrid