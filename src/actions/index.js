import tmdb from "../api/tmdb";
import axios from 'axios'


export const getPopularMovie = async (param) => {
    try {
        // const results = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&region=US&page=1`)
        const results = await tmdb.get('movie/popular?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&region=US&page=1')
        param(results.data.results)
    } catch (error) {
        console.log(error)
    }
}

export const getMovieById = async (param, movie_id) => {
    try {
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US`)
        param(movie.data)
    } catch (error) {
        return error
    }
}