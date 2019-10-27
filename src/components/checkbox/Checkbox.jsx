import React, { useState, useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

// ini url untuk search by genres
// https://api.themoviedb.org/3/discover/movie?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&sort_by=popularity.desc&with_genres=28


export default function CheckboxLabels() {
    const [genres, setGenres] = useState([])
    var arrGenres = []
    // const [selected, setSelected] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US')
                setGenres(result.data.genres)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    const handleChange = event => {
        var index = arrGenres.indexOf(event.target.value)
        if (index !== -1) {
            if (event.target.checked === false) {
                arrGenres.splice(index, 1);
            }
        } else {
            arrGenres.push(event.target.value)
        }

        console.log(arrGenres);
    }

    return (
        <FormGroup row>
            {genres.map((item) =>
                <FormControlLabel
                    key={item.id}
                    control={
                        <Checkbox
                            // checked={status.isChecked}
                            onChange={handleChange}
                            value={item.id}
                            color="primary"
                        // onClick={handleChange}
                        />
                    }
                    label={item.name}
                />
            )}
        </FormGroup>
    );
}
