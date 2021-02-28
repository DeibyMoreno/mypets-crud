import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({ data, handleClickOpenConfirm, editData }) {
  const classes = useStyles();
  useEffect(() => {
    console.log(data);
  });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pet name</TableCell>
            <TableCell align="right">Pet breed</TableCell>
            <TableCell align="right">Pet type</TableCell>
            <TableCell align="right">Birthday date</TableCell>
            <TableCell align="right">Owner name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.namePet.val}
              </TableCell>
              <TableCell align="right">{row.breedPet.val}</TableCell>
              <TableCell align="right">{row.type.val}</TableCell>
              <TableCell align="right">{row.birthdayPet.val}</TableCell>
              <TableCell align="right">{row.ownerName.val}</TableCell>
              <TableCell align="right">{row.phone.val}</TableCell>
              <TableCell align="right">{row.address.val}</TableCell>
              <TableCell align="right">{row.email.val}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" onClick={()=>editData(row)} className={classes.margin}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" onClick={()=>handleClickOpenConfirm(row.id)} className={classes.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
