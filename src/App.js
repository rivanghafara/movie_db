import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Movie from './components/popular-movies/Movie'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2)
  }
}));


function App() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Box className={classes.cardGrid}>
          <Grid container>
            <Movie />
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default App;
