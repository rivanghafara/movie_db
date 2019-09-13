import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

const MovieItem = ({ id, title, posterImg, overview }) => {

    const useStyles = makeStyles({
        card: {
            width: 200,
            margin:"2em"
            
        }
    });

    const classes = useStyles();

    return (
        <Box className={classes.card} alignContent="flex-end">
            <img alignItems="center" src={("https://image.tmdb.org/t/p/w300/" + posterImg)} alt=""/>
        </Box>
    )
}

export default MovieItem