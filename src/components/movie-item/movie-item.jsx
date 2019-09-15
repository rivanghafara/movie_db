import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Zoom from '@material-ui/core/Zoom';

const MovieItem = ({ id, title, posterImg, overview }) => {

    const useStyles = makeStyles({
        card: {

            height: 375,
            width: 250,
            margin: "2em",
            alignContent: 'center',
            '&:hover': {
                cursor: 'pointer',
                zoom: 'true'
            }

        },
        media: {
            minHeight: 375,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 'auto',
            '&:hover': {
                cursor: 'pointer',
                // height: 400,
                transform:'scale(1.1)',
                backgroundColor: 'white',
                opacity: 0.5,
                transition:'all 0.5s'

            }
        }
    });

    const classes = useStyles();

    return (
        <Zoom in>
            <Card className={classes.card} >
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={("https://image.tmdb.org/t/p/w500/" + posterImg)}
                    title={title}
                />
            </Card >
        </Zoom>
    )
}

export default MovieItem