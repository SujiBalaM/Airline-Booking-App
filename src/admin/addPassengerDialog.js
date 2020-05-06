import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addPassengers} from '../redux/passengers/action'
import { Button, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

const useStyles = ((theme) => ({
   root: {
     '& > *': {
       margin: theme.spacing(1),
       width: '25ch',
     },
   },
 }));
 class AddPassengerDialog extends Component {
   constructor(props){
      super(props)
      this.state = {
         isOpen: false,
         genderValue: ""
      }
   }

   handleClickOpen = () => {
      const { isOpen } = this.state;
      this.setState({isOpen: !isOpen});
    };
  
    handleClose = () => {
      this.props.actionHandleClose();
    };

    handleChange = (event) => {
      this.setState({genderValue: event.target.value});
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const formdata = {};
      formdata.id = data.get("id");
      formdata.firstname = data.get("firstname");
      formdata.lastname = data.get("lastname");
      this.props.addingPassengers(formdata);
    }

   render() {
      const { classes } = this.props;
      const gender = [
         {
           Gender: 'Male',
           Label: 'M',
         },
         { Gender: 'Female', Label: 'F' },
         { Gender: 'Below 10 yrs', Label: 'Infant' },
       ];

      return (
         <div>
            <Dialog open={this.props.isOpen} onClose={this.handleClickOpen}>
        <DialogTitle id='form-dialog-title'>Add New Passengers</DialogTitle>
        <form className={classes.root} onSubmit={this.handleSubmit} >
          <TextField
            autoFocus
            margin='dense'
            name='id'
            label='Id'
            type='number'
            fullWidth
          />
          <TextField name='firstname' label='First Name' type='text' />
          <TextField name='lastname' label='Last Name' type='text' />
          <TextField
            name='gender'
            select
            label='Select'
            value={this.state.genderValue}
            onChange={this.handleChange}
            helperText='Please select your gender'
          >
            {gender.map((option) => (
              <MenuItem key={option.Gender} value={option.Gender}>
                {option.Label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name='date'
            label='Birthday'
            type='date'
            defaultValue='2017-05-24'
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField name='passport' label='Passport Number' type='text' />
          <TextField name='address' label='Address' type='text' />
          <TextField name='ancillary' label='Ancillary Services' type='text' />
          <TextField name='seatnumber' label='Seat Number' type='text' />
          <DialogActions>
            <Button onClick={this.handleClose} name="cancel" color='primary'>
              Cancel
            </Button>
            <Button type="submit" name="submit" color='primary'>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
         </div>
      )
   }
}
// const mapStateToProps = (state) => {
//    return {
//      addedPassengers: state.submitPassengers,
//    };
//  };
 
const mapDispatchToProps = (dispatch) => {
   return {
     addingPassengers: (formdata) => dispatch(addPassengers(formdata)),
   };
 };
 
export default withStyles(useStyles)(
   connect(null ,mapDispatchToProps)(AddPassengerDialog));