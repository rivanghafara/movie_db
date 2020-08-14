import * as actionTypes from '../actions/types'

export default (state, action) => {
	switch (action.type) {
		case actionTypes.FETCHING_MOVIE:
			return {
				...state,
				genresList: action.payload
			}
		default:
			return 'default'
	}
}