import React from 'react';
import TeamBox from './TeamBox';
import UrlBox from './UrlBox';
import Button from './Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    'text-align': 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(50),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: grey[50],
  },
  urlBox: {
    paddingTop: '30px',
  },
  button: {
    paddingTop: '30px',
  },
}));

function SearchForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.form}>
        <div>
          <div>
            <TeamBox value={props.value} handleTeam={props.handleTeam} />
          </div>
          <div className={classes.urlBox}>
            <UrlBox handleChange={props.handleUrlBox} />
          </div>
          <div className={classes.button}>
            <Button name={'search'} handleClick={props.handleSearch} />
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default SearchForm;
