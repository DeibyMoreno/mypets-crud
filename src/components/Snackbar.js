import {React, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars({alertBar, setAlertBar}) {
  const classes = useStyles();
  const [state, setState] = useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertBar({
        open : false
    });
  };

  return (
    <div className={classes.root}>
      <Snackbar open={alertBar.open} autoHideDuration={4000} anchorOrigin={{ vertical, horizontal }} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertBar.type}>
            {alertBar.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
