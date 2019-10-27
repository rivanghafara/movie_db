import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Movie from '../../components/popular-movies/Movie'
import NavigationPanel from '../../components/nav/Navigation'
import ExpansionPanel from '../../components/expansion-panel/Expansion-Panel'

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
    },
}));


const HomePage = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <NavigationPanel />
            <div className={classes.root} >
                <Box className={classes.cardGrid}>
                    <ExpansionPanel />
                    <Container >
                        <Typography variant="h4" style={{marginTop:'2%'}}> Popular</Typography>
                        <Grid container className={classes.grid}>
                            <Movie />
                        </Grid>
                    </Container>
                </Box>
            </div>
        </React.Fragment>
    )
}


export default HomePage