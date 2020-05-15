import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DialogTitle } from '@material-ui/core';
import { TextField, MenuItem, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { connect } from 'react-redux';
import {
  addAncillery,
  updateAncillery,
  deleteAncillery,
} from '../redux/ancillery/action';

const useStyles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});

class AddServicesForm extends Component {
  constructor(props) {
    super(props);
    console.log('asdsdasdasdad------------------->', props);
    this.state = {
      meals: props.asData ? (props.asData.meals ? props.asData.meals : '') : '',
      snacks: props.asData
        ? props.asData.snacks
          ? props.asData.snacks
          : ''
        : '',
      drinks: props.asData
        ? props.asData.drinks
          ? props.asData.drinks
          : ''
        : '',
      isOpen: false,
    };
  }
  handleClickOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClose = (e) => {
    e.preventDefault();
    this.props.actionHandleClose();
  };
  handleSubmit = (event, type) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    console.log(data);
    const formdata = {};

    if (type == 'add') {
      formdata.id = this.props.data.id;
      formdata.snacks = data.get('snacks');
      formdata.meals = data.get('meals');
      formdata.drinks = data.get('drinks');
      console.log(formdata);
      this.props.addingServices(formdata);
      this.props.actionHandleClose();
    } else {
      formdata.id = this.props.data.id;
      formdata.snacks = this.state.snacks;
      formdata.meals = this.state.meals;
      formdata.drinks = this.state.drinks;
      this.props.updatingServices(formdata);
    }
  };
  handleUpdate = (event) => {
    const formdata = {};
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { data } = this.props;
    console.log('food', nextProps);
    if (nextProps.asData.length !== 0) {
      console.log('food------------>', nextProps);
      this.setState({
        meals: nextProps.asData.meals,
        snacks: nextProps.asData.snacks,
      });
    }
  }

  render() {
    const { classes, currentmode } = this.props;

    const meal = [
      {
        Meal: 'Veg meal',
        Label: 'Veg',
      },
      { Meal: 'Veg meal special', Label: 'Veg-SPL' },
      { Meal: 'Non-veg meal', Label: 'Non-veg' },
      { Meal: 'Non-veg special', Label: 'Non-veg-SPL' },
    ];
    const snacks = [
      {
        Snack: 'Fried Almond',
        Label: 'Almond',
      },
      { Snack: 'Fried Almonds Pepper', Label: 'Almond-SPL' },
      { Snack: 'Fried Cashew', Label: 'Cashew' },
      { Snack: 'Fried Cashew Pepper', Label: 'Cashew-SPL' },
    ];
    const drinks = [
      {
        Drinks: 'Coke',
        Label: 'Coke-50ml',
      },
      { Drinks: 'Apple Juice', Label: 'Apple' },
      { Drinks: 'Sweet-Lime Juice', Label: 'Sweet-lime' },
      { Drinks: 'Fresh Fruit Cocktail', Label: 'Cocktail' },
    ];
    console.log('test', this.props.data);
    return (
      <div>
        <Dialog open={this.props.isOpen} onClose={this.handleClickOpen}>
          <DialogTitle id='form-dialog-title'>
            Add Anciallery Services
          </DialogTitle>
          <form className={classes.root}>
            <TextField
              name='meals'
              select
              label='Select'
              value={this.state.meals}
              onChange={this.handleChange}
              helperText='Please select your meal'
            >
              {meal.map((option) => (
                <MenuItem key={option.Meal} value={option.Meal}>
                  {option.Label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name='snacks'
              select
              label='Select'
              value={this.state.snacks}
              onChange={this.handleChange}
              helperText='Please select your snack'
            >
              {snacks.map((option) => (
                <MenuItem key={option.Snack} value={option.Snack}>
                  {option.Label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name='drinks'
              select
              label='Select'
              value={this.state.drinks}
              onChange={this.handleChange}
              helperText='Please select your drinks'
            >
              {drinks.map((option) => (
                <MenuItem key={option.Drinks} value={option.Drinks}>
                  {option.Label}
                </MenuItem>
              ))}
            </TextField>
            <DialogActions>
              <Button onClick={this.handleClose} name='cancel' color='primary'>
                Cancel
              </Button>
              {currentmode == 'add' ? (
                <Button
                  type='submit'
                  name='submit'
                  color='primary'
                  onSubmit={(e) => this.handleSubmit(e, 'add')}
                >
                  Add
                </Button>
              ) : (
                <Button
                  type='submit'
                  name='update'
                  color='primary'
                  onSubmit={(e) => this.handleSubmit(e, 'edit')}
                >
                  Update
                </Button>
              )}
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedAncillery: state.addAncillery,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addingServices: (formdata) => dispatch(addAncillery(formdata)),
    updatingServices: (id) => dispatch(updateAncillery(id)),
  };
};
export default withStyles(useStyles)(
  connect(mapStateToProps, mapDispatchToProps)(AddServicesForm)
);
