import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DialogTitle } from '@material-ui/core';
import { TextField, MenuItem, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

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
    this.state = {
      mealOption: '',
      snacksOption: '',
      drinksOption: '',
    };
  }

  handleChange = (event) => {
    this.setState({ mealOption: event.target.value });
    this.setState({ snacksOption: event.target.value });
    this.setState({ drinksOption: event.target.value });
  };
  handleClose = () => {
    this.props.actionHandleClose();
  };
  render() {
    const { classes } = this.props;

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

    return (
      <div>
        <Dialog>
          <DialogTitle id='form-dialog-title'>
            Add Anciallery Services
          </DialogTitle>
          <form className={classes.root} onSubmit={this.handleSubmit}>
            <TextField
              name='meal'
              select
              label='Select'
              value={this.state.mealOption}
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
              value={this.state.snacksOption}
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
              value={this.state.drinksOption}
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
              <Button type='submit' name='submit' color='primary'>
                Add
              </Button>
              <Button type='submit' name='submit' color='primary'>
                Update
              </Button>
              <Button type='submit' name='submit' color='primary'>
                Delete
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(useStyles)(AddServicesForm);
