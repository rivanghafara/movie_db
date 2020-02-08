import React from 'react';
import { useParams } from 'react-router-dom';

function MovieByID() {
    let { id } = useParams()

    return (
        <div>
            <h2>ID: {id}</h2>
        </div>
    );
  }

  export default MovieByID