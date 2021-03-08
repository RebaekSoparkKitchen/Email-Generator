import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const sources = [
  {
    value: 'sapphire',
    label: 'SAP CN Event Webinar',
  },
  {
    value: 'gb',
    label: 'GB Webinar',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '0 auto',
      width: '35ch',
    },
  },
}));

export default function DataSearchBox(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-select-dataSource"
          select
          label="data source select"
          value={props.value}
          onChange={props.handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select data source"
          variant="filled"
        >
          {sources.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
