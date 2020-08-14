import React from 'react'

export const CastList = (props) => {
    return (
        props.cast.map(cast => (
            <h2 key={cast.id}>{cast.name} as <i>{cast.character}</i></h2>
        ))
    )
}
