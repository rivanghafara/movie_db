import React, { useState, useEffect } from 'react';
import Navbar from '../../components/General/navbar'
import Movie from '../../components/Show-Details/show-details'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function MovieDetails() {
    let { id } = useParams()
    const [movieDetail, setMovieDetail] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const originResult = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US`)
                const release_year = originResult.data.release_date.substring(0, 4)
                originResult.data['year_release'] = release_year
                setMovieDetail(originResult.data)
            } catch (error) {
                console.log('Error: ', error);
            }
        }
        fetchData()
    }, [id])
    return (
        <div>
            <Navbar />
            <Movie {...movieDetail}/>
        </div>
    )
}

export default MovieDetails