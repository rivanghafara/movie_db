import axios from 'axios'

export const fetchingGenre = async (initialState, dispatch) => {
    try {
        const results = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US')
        let add_value = results.data
        add_value.genres.unshift(initialState[0]);
        dispatch(add_value.genres)
    } catch (error) {
        console.log(error)
    }
}

