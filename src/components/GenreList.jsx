import React from 'react'


export const GenreList = (props) => {
    props = Object.values(props)
    if (props === undefined) return ''
    return (
        <>
            {props.map(genre => (
                <h1 key={genre.id}>{genre.name}</h1>
            ))}
        </>
    )
}
