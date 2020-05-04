import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { userLogin } from '../redux/login/action';

class Header extends Component {
  render() {
    const { loginusers } = this.props;
    console.log(loginusers);
    const { loginDetails } = this.props;
    console.log(loginDetails);

    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              component='h1'
              variant='h5'
              color='inherit'
              style={style}
            >
              Welcome to Airline Travels Application
            </Typography>
            <Button
              type='reset'
              fullWidth
              variant='contained'
              color='primary'
              className=''
            >
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const style = {
  alignItems: 'center',
};

const mapStateToProps = (state) => {
  return {
    loginusers: state.loginlist,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginDetails: (email, password) => dispatch(userLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
