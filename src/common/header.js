import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  render() {
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
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const style = {
  alignItems: 'center',
};
export default Header;
