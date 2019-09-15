import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import MovieItem from '../movie-item/movie-item'

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&region=US&page=1')
                setMovies(result.data.results)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (

        movies
            .map((item) => (
                <GridList>
                    <MovieItem key={item.id} id={item.id} title={item.title} posterImg={item.poster_path} overview={item.overview} />
                </GridList>
            ))
    )
}

export default PopularMovie