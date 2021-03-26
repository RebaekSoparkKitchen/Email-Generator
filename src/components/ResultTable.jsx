import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function ResultTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableBody>
          <TableRow>
            <TableCell width="30%">ID</TableCell>
            <TableCell align="left">{props.data.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">Email Name</TableCell>
            <TableCell align="left">{props.data.title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">CRM Code</TableCell>
            <TableCell align="left">{props.data.code}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">Meeting Time</TableCell>
            <TableCell align="left">{props.data.meetingTime}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
