import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/tailwind.css'
import { Link } from "react-router-dom";

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const originResult = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&region=US&page=1')
                const result = originResult.data.results
                setMovies(result)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (

        movies
            .map((item) => (
                // <Link to={item.id} >
                <Link to={(`/${item.id}`)}>
                    <div class="max-w-lg rounded overflow-hidden shadow-lg" key={item.id} id={item.id}>
                        <img class="transition duration-300 ease-in-out hover:opacity-50 transform hover:-translate-y-1 hover:scale-110" src={(`https://image.tmdb.org/t/p/w500${item.poster_path}`)} alt={item.title}></img>
                    </div>
                </Link>
            ))
    )
}

// const RouteByID = () => {
//     let { id } = useParams()

//     return (
//         <div>
//             <h3>ID: {id}</h3>
//         </div>
//     )
// }


export default PopularMovie