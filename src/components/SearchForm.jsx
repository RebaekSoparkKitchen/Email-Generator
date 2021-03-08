import React, { useState } from 'react';
import DataSourceBox from './DataSourceBox';
import UrlBox from './UrlBox';
import SearchButton from './SearchButton';
import { makeStyles } from '@material-ui/core/styles';
import { grey, blue, pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
    backgroundColor: grey[50],
    padding: '60px 60px',
    width: '300px',
    textAlign: 'center',
    // border: '3px solid ' + blue[100],
    borderRadius: '10px',
    margin: '0 auto',
    boxShadow: `0 0 10px 1px #888888;`,
  },
  urlBox: {
    paddingTop: '30px',
  },
  button: {
    paddingTop: '30px',
  },
}));

function SearchForm() {
  const classes = useStyles();
  const dataSources = [
    {
      value: 'sapphire',
      label: 'SAP CN Event Webinar',
    },
    {
      value: 'gb',
      label: 'GB Webinar',
    },
  ];

  const [url, setUrl] = useState('');
  const [source, setSource] = useState(dataSources[0].value);

  const handleDataSource = (event) => {
    setSource(event.target.value);
  };

  const handleUrlBox = (event) => {
    setUrl(event.target.value);
  };

  const handleButton = () => {
    alert(url);
  };

  return (
    <div className={classes.root}>
      <div>
        <DataSourceBox value={source} handleChange={handleDataSource} />
      </div>
      <div className={classes.urlBox}>
        <UrlBox handleChange={handleUrlBox} />
      </div>
      <div className={classes.button}>
        <SearchButton handleClick={handleButton} />
      </div>
    </div>
  );
}

export default SearchForm;
