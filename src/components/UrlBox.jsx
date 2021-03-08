import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '0 auto',
      width: '35ch',
    },
  },
}));

export default function UrlBox(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="webinar url"
          type="text"
          size="medium"
          onChange={props.handleChange}
          variant="outlined"
          helperText="Please type in the webinar url"
        />
      </div>
    </form>
  );
}
