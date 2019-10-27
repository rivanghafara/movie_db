import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '../checkbox/Checkbox'

// ini url untuk search by genres
// https://api.themoviedb.org/3/discover/movie?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&sort_by=popularity.desc&with_genres=28

const CheckboxLabels = (id, name) => {

    return (
        <FormControlLabel
            key={id}
            label={name}
            control={
                <Checkbox />
            }
        />
    )
}

export default CheckboxLabels