import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Zoom from '@material-ui/core/Zoom';
import CardActionArea from '@material-ui/core/CardActionArea';

const MovieItem = ({ id, title, posterImg, overview }) => {

    const useStyles = makeStyles({
        card: {

            width: 250,
            height: 375,
            margin: "2em",
            alignContent: 'center',
            zoom: 'true'

        },
        image: {
            minHeight: 375,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 'auto',
            '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
                backgroundColor: 'white',
                opacity: 0.5,
                transition: 'all 0.5s'

            }
        }
    });

    const classes = useStyles();

    const handleClick = () => (
        console.log(`go to ${id} page`)
        
        
    )

    return (
        <Zoom in>
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        key={id}
                        className={classes.image}
                        component="img"
                        image={("https://image.tmdb.org/t/p/w500/" + posterImg)}
                        title={title}
                        onClick={handleClick}
                    />
                </CardActionArea>
            </Card >
        </Zoom>
    )
}

export default MovieItem