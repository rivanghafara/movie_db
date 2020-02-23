import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/tailwind.css'
import ShowGrid from '../Show-Details/show-grid'

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const originResult = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&region=US&page=1')
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
                <ShowGrid {...item} />
            ))
    )
}

export default PopularMovie