import React from 'react';
import '../styles/tailwind.css'

function MovieScores(props) {
    let color
    if (props.score < 0 || props.score > 10.0) {
        return '-'
    }

    switch (true) {
        case (props.score >= 7):
            color = 'green-400'
            break
        case (props.score < 5):
            color = 'red-600'
            break
        case (props.score >= 5):
            color = 'yellow-500'
            break
        default:
            color = 'grey-500'
            break
    }

    return (
        <div className={(`box-border mt-4 rounded-full h-16 w-16 border-4 border-${color}`)} >
            <div className={(`text-white justify-center rounded-full bg-${color} align-middle text-center py-2 m-2 text-center`)}>
                <p>{props.score}</p>
            </div>
        </div>
    )
}

export default MovieScores