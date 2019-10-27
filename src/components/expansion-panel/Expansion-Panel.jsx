import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    console.log(arrGenres);
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
      </ExpansionPanel>
    </div>
  );
}