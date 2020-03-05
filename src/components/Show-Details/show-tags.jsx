import React, { useState, useEffect } from 'react';
import '../../styles/tailwind.css'

function MovieTag(props) {
    const [movieGenres, setMovieGenres] = useState([])
    useEffect(() => {
        setMovieGenres(Object.values(props))
    }, [props])

    return (
        movieGenres.map((item) => (
            <div key={item.id} className="pr-6 pb-4 transform hover:-translate-y-1 text-blue-500 text-sm hover:text-blue-900 hover:text-2xl font-light transition duration-300 ease-out">
                <div className="flex-1 ">
                    <a href="http://" className="">
                        {item.name}
                    </a>
                </div>
            </div >
        ))
    )
}

export default MovieTag