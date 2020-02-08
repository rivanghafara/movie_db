import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  checkboxGroup: {
    width: '140px'
  },
  button: {
    // up right bottom left
    margin: '10px 10px 24px 24px'
  }
}));



export default function SimpleExpansionPanel() {
  const classes = useStyles();
  const [genres, setGenres] = useState([])
  var arrGenres = []

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
  }

  const submitGenres = event => {
    // const result = axios.get('https://api.themoviedb.org/3/discover/movie?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US&sort_by=popularity.desc&with_genres='+ arrGenres[0])
    // console.log(result);
    
    // console.log(arrGenres[0]);
    
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Genres</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup row>
            {genres.map((item) =>
              <FormControlLabel
                className={classes.checkboxGroup}
                key={item.id}
                label={item.name}
                control={

                  <Checkbox
                    // checked={status.isChecked}
                    onChange={handleChange}
                    value={item.id}
                    color="primary"
                  // onClick={handleChange}
                  />
                }

              />
            )}
          </FormGroup>
        </ExpansionPanelDetails>
        <Button variant="contained" color="primary" className={classes.button} onClick={submitGenres}>
          Generate
      </Button>
      </ExpansionPanel>
    </div>
  );
}