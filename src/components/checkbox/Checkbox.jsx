import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

// ini url untuk search by genres
// https://api.themoviedb.org/3/discover/movie?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&sort_by=popularity.desc&with_genres=28

const CustomCheckbox = (id, handleChange) => {

    return (
        <Checkbox
            value={id}
            onChange={handleChange}
            color='primary'
        />
    )
}

export default CustomCheckbox