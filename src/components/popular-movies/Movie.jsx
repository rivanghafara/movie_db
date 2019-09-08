import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MovieItem from '../movie-item/movie-item'

const GetMovie = () => {
    const [movies, setMovies] = useState([]);
    const useStyles = makeStyles({
        card: {
            maxWidth: 345,
        },
        media: {
            height: 500,
        },
    });
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&page=1&region=GB')
                console.log(result.data.results);

                setMovies(result.data.results)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (
        movies.map(({item, ...otherMovieProps}) => (
            <MovieItem key={item.id} {...otherMovieProps} />
        ))
    )

    // return (
    //     movies.map((item) => (
    //       <li key={item.id}>
    //         {item.original_title}
    //         <p>{item.overview}</p>
    //       </li>
    //     ))
    // )

    // return (
    //     movies.map((item) => (
    //         <Card className={classes.card} key={item.id}>
    //             <CardActionArea>
    //                 <CardMedia
    //                     className={classes.media}
    //                     image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
    //                     title={item.original_title}
    //                 />
    //                 <CardContent>
    //                     <Typography gutterBottom variant="h5" component="h2">
    //                         {item.original_title}
    //                     </Typography>
    //                     <Typography variant="body2" color="textSecondary" component="p" noWrap="false">
    //                         {item.overview}
    //                     </Typography>
    //                 </CardContent>
    //             </CardActionArea>
    //             <CardActions>
    //                 <Button size="small" color="primary">
    //                     Share
    //                      </Button>
    //                 <Button size="small" color="primary">
    //                     Learn More
    //                     </Button>
    //             </CardActions>
    //         </Card>

    //     ))
    // )
}

export default GetMovie