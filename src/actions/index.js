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
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=850c683da4d46367b8a14773ea9219a0&append_to_response=credits&language=en-US`)
        param(data)
    } catch (error) {
        return error
    }
}

export const getGenres = async (param) => {
    try {
        const { data } = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US')
        param(data.genres)
    } catch (error) {
        return error
    }
}

export const getMoviesByGenre = async (param, genre_id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=850c683da4d46367b8a14773ea9219a0&with_genres=${genre_id}&page=1`)
        param(data.results)
    } catch (error) {
        return error
    }
}