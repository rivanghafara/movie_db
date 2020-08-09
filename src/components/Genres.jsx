import React from 'react'
import { Link } from "react-router-dom";

export const GenresList = (props) => {
    console.log('rendered');
    return (
        <Link to={(`/genres/${props.id}`)} >
        {/* // <Link to={(`/genres/${props.id}`)} onClick={() => { return !isSelected}}> */}
            <h3 onClick={()=> {return console.log(`${props.name} is clicked, now you are in ${props.name}`) }}>{props.name}</h3>
            {/* {!isSelected ?  <h3>{props.name}</h3> :  <h3>kakaka</h3>} */}
           
        </Link>
    )
}

export const MemoGenres = React.memo(GenresList)