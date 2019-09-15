import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const MovieItem = ({ id, title, posterImg, overview }) => {

    const useStyles = makeStyles({
        card: {
            margin: "2em",
            alignContent: 'center',
            
        },
        media: {
            height: 375,
            width: 250
        }
    });

    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardMedia
                className={classes.media}
                component="img"
                image={("https://image.tmdb.org/t/p/w500/" + posterImg)}
                title={title}
            />
        </Card >
    )
}

export default MovieItem