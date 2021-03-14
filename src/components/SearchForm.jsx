import React, { useState } from 'react';
import DataSourceBox from './DataSourceBox';
import UrlBox from './UrlBox';
import Button from './Button';
import { makeStyles } from '@material-ui/core/styles';
import { grey, blue, pink } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import http from '../services/httpService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleSearch = async () => {
  const obj = { url: 'https://events.sap.cn/w-service/ws2/' };
  try {
    const { data: post } = await http.get('http://localhost:8080/api/test');
    console.log(post);
  } catch (ex) {
    if (ex.response && ex.response.status === 404) {
      toast.error('the data not found');
    }
  }
};

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

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.form}>
        <div>
          <div>
            <DataSourceBox value={source} handleChange={handleDataSource} />
          </div>
          <div className={classes.urlBox}>
            <UrlBox handleChange={handleUrlBox} />
          </div>
          <div className={classes.button}>
            <Button name={'search'} handleClick={handleSearch} />
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default SearchForm;
