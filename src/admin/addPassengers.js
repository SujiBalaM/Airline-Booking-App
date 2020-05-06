import React, { Component } from 'react';
import { Button, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddPassengerDialog from '../admin/addPassengerDialog';
// import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function AddPassengers() {
 

  const [open, setOpen] = React.useState(false);
  const [gender, setGender] = React.useState('Male');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const hanldeClose = (args) => {
    setOpen(false);
  }

  return (
    <div>
      <Button color='primary' variant='contained' onClick={handleClickOpen}>
        Add Passengers
      </Button>

      <AddPassengerDialog isOpen={ open } actionHandleClose={ hanldeClose } />
      
    </div>
  );
}

export default AddPassengers;
