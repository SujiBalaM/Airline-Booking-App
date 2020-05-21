import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPassengers, updatePassengers } from '../redux/passengers/action';
import { dasboardData } from '../redux/dashboard/action';
import { Button, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});
class AddPassengerDialog extends Component {
  successToast = () =>
    toast.success('Passengers Added Successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });

  constructor(props) {
    console.log('addDialog', props);
    super(props);
    this.state = {
      isOpen: false,
      genderValue: '',
      id: props.passengerData
        ? props.passengerData.id
          ? props.passengerData.id
          : ''
        : '',
      flightNo: props.passengerData
        ? props.passengerData.flightNo
          ? props.passengerData.flightNo
          : ''
        : '',
      firstname: props.passengerData
        ? props.passengerData.firstname
          ? props.passengerData.firstname
          : ''
        : '',
      lastname: props.passengerData
        ? props.passengerData.lastname
          ? props.passengerData.lastname
          : ''
        : '',
      gender: props.passengerData
        ? props.passengerData.gender
          ? props.passengerData.gender
          : ''
        : '',
      DOB: props.passengerData
        ? props.passengerData.date
          ? props.passengerData.date
          : ''
        : '',
      passportnumber: props.passengerData
        ? props.passengerData.passport
          ? props.passengerData.passport
          : ''
        : '',
      address: props.passengerData
        ? props.passengerData.address
          ? props.passengerData.address
          : ''
        : '',
      ancillaryservices: props.passengerData
        ? props.passengerData.ancillary
          ? props.passengerData.ancillary
          : ''
        : '',
      seatnumber: props.passengerData
        ? props.passengerData.seatnumber
          ? props.passengerData.seatnumber
          : ''
        : '',
    };
  }

  handleClickOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  handleClose = () => {
    this.props.actionHandleClose();
  };

  handleChange = (event) => {
    this.setState({ genderValue: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { passengerData } = this.props;
    const form = e.target;
    const data = new FormData(form);
    const formdata = {};
    console.log('passengerData------->', passengerData);
    if (passengerData.length === 0) {
      formdata.id = data.get('id');
      formdata.flightNo = data.get('flightNo');
      formdata.firstname = data.get('firstname');
      formdata.lastname = data.get('lastname');
      formdata.gender = data.get('gender');
      formdata.DOB = data.get('date');
      formdata.passportnumber = data.get('passport');
      formdata.address = data.get('address');
      formdata.ancillaryservices = data.get('ancillary');
      formdata.seatnumber = data.get('seatnumber');
      this.props.addingPassengers(formdata);
      // this.props.actionHandleClose();
      // this.props.dasboardData();
    } else {
      formdata.id = this.props.passengerData.id;
      formdata.flightNo = this.state.flightNo;
      formdata.firstname = this.state.firstname;
      formdata.lastname = this.state.lastname;
      formdata.gender = this.state.gender;
      formdata.DOB = this.state.date;
      formdata.passportnumber = this.state.passport;
      formdata.address = this.state.address;
      formdata.ancillaryservices = this.state.ancillary;
      formdata.seatnumber = this.state.seatnumber;
      this.props.editingPassenger(formdata);
      // this.props.actionHandleClose();
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { addedPassengers, dasboardData } = this.props;
    console.log('nextProps', nextProps.addedPassengers.isDataPending);
    console.log('this props', addedPassengers.isDataPending);
    if (
      (nextProps.addedPassengers.isDataPending === false &&
        addedPassengers.isDataPending === true) ||
      (nextProps.addedPassengers.isEditPending === false &&
        addedPassengers.isEditPending === true)
    ) {
      if (
        nextProps.addedPassengers.isDataSuccess === true ||
        nextProps.addedPassengers.isEditSuccess === true
      ) {
        console.log('nextProps', nextProps.addedPassengers);
        this.successToast();
        this.props.actionHandleClose();
        dasboardData();
      }
    }
  }

  render() {
    const { classes, passengerData, currentmode } = this.props;
    console.log('passengerData', passengerData);
    console.log('currentmode', currentmode);

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
          <form className={classes.root} onSubmit={this.handleSubmit}>
            <TextField
              autoFocus
              margin='dense'
              name='id'
              value={this.state.id}
              label='Id'
              type='number'
              fullWidth
            />
            <TextField
              margin='dense'
              name='flightNo'
              label='Flight Number'
              type='text'
              value={this.state.flightNo}
              onChange={this.handleChange}
              fullWidth
            />

            <TextField
              name='firstname'
              label='First Name'
              type='text'
              value={this.state.firstname}
              onChange={this.handleChange}
            />
            <TextField
              name='lastname'
              label='Last Name'
              type='text'
              value={this.state.lastname}
              onChange={this.handleChange}
            />
            <TextField
              name='gender'
              select
              label='Select'
              value={this.state.gender}
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
              label='Date of Journey'
              type='date'
              defaultValue='2020-05-18'
              className={classes.textField}
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name='passport'
              label='Passport Number'
              type='text'
              value={this.state.passportnumber}
              onChange={this.handleChange}
            />
            <TextField
              name='address'
              label='Address'
              type='text'
              value={this.state.address}
              onChange={this.handleChange}
            />
            <TextField
              name='ancillary'
              label='Ancillary Services'
              type='text'
              value={this.state.ancillaryservices}
              onChange={this.handleChange}
            />
            <TextField
              name='seatnumber'
              label='Seat Number'
              type='text'
              value={this.state.seatnumber}
              onChange={this.handleChange}
            />
            <DialogActions>
              <Button onClick={this.handleClose} name='cancel' color='primary'>
                Cancel
              </Button>
              {currentmode == 'add' ? (
                <Button type='submit' name='submit' color='primary'>
                  Add
                </Button>
              ) : (
                <Button type='submit' name='update' color='primary'>
                  Update
                </Button>
              )}

              <ToastContainer autoClose={15000} />
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addedPassengers: state.submitPassengers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addingPassengers: (formdata) => dispatch(addPassengers(formdata)),
    editingPassenger: (id) => dispatch(updatePassengers(id)),
    dasboardData: () => dispatch(dasboardData()),
  };
};

export default withStyles(useStyles)(
  connect(mapStateToProps, mapDispatchToProps)(AddPassengerDialog)
);
