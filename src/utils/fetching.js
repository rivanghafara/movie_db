import axios from 'axios'
import tmdb from '../apis/tmdb'

export const fetchingGenre = async () => {
    try {
        const results = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US')
        return results
    } catch (error) {
        console.log(error)
    }
}
export const fetchingPopularMovies = async (setState) => {
    try {
        const results = await tmdb.get('movie/popular?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&region=US&page=1')
        setState(results.data.results)
    } catch (error) {
        console.log(error)
    }
}
export const fetchingMoviesById = async (setState, movie_id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=850c683da4d46367b8a14773ea9219a0&append_to_response=credits&language=en-US`)
        setState(data)
    } catch (error) {
        return error
    }
}

export const fetchingMoviesByGenre = async (setState, genre_id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=850c683da4d46367b8a14773ea9219a0&with_genres=${genre_id}&page=1`)
        setState(data.results)
    } catch (error) {
        return error
    }
}
