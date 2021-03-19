import React from 'react';
import ResultTable from './ResultTable';
import Button from './Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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
  button: {
    paddingTop: '30px',
  },
}));

function ResultForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.form}>
        <div>
          <div>
            <ResultTable data={props.data} />
          </div>
          <div className={classes.button}>
            <Button name="Download" handleClick={props.handleDownload} />
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default ResultForm;
