import React, { Component } from 'react';
import { Button, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
// import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const gender = [
  {
    Gender: 'Male',
    Label: 'F',
  },
  { Gender: 'Female', Label: 'F' },
  { Gender: 'Below 10 yrs', Label: 'Infant' },
];
function AddPassengers() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [gender, setGender] = React.useState('Male');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <Button color='primary' variant='contained' onClick={handleClickOpen}>
        Add Passengers
      </Button>

      <Dialog open={open} onClose={handleClickOpen}>
        <DialogTitle id='form-dialog-title'>Add New Passengers</DialogTitle>
        <form className={classes.root} noValidate autoComplete='off'>
          <TextField
            autoFocus
            margin='dense'
            id='id'
            label='Id'
            type='number'
            fullWidth
          />
          <TextField id='firstname' label='First Name' type='text' />
          <TextField id='lastname' label='Last Name' type='text' />
          <TextField
            id='gender'
            select
            label='Select'
            value={gender}
            onChange={handleChange}
            helperText='Please select your gender'
          >
            {/* {gender.map((option) => (
              <MenuItem key={option.Gender} value={option.Gender}>
                {option.Label}
              </MenuItem>
            ))} */}
          </TextField>
          <TextField
            id='date'
            label='Birthday'
            type='date'
            defaultValue='2017-05-24'
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id='passport' label='Passport Number' type='text' />
          <TextField id='address' label='Address' type='text' />
          <TextField id='ancillary' label='Ancillary Services' type='text' />
          <TextField id='seatnumber' label='Seat Number' type='text' />
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleClose} color='primary'>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddPassengers;
