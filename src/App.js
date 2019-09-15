import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Movie from './components/popular-movies/Movie'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2)
  },
  grid: {
    justifyContent: 'center'
  }
}));


function App() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root} >
        <Box className={classes.cardGrid}>
          <Container >
            <Typography variant="h4"> Popular</Typography>
            <Grid container className={classes.grid}>
              <Movie />
            </Grid>
          </Container>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default App;
