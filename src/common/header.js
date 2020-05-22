import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const userDetails = localStorage.getItem('user');
const userDetail = JSON.parse(userDetails);
const googleUserDetails = localStorage.getItem('userInfo');
const googleUser = JSON.parse(googleUserDetails);
const user =
  (googleUser && googleUser.profileObj) || (userDetail && userDetail[0]);
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    localStorage.clear('user');
    window.location.reload();
  };
  render() {
    const { classes } = this.props;
    const { history } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Welcome {user && user.name}
            </Typography>
            <Button color='inherit' onClick={this.handleClick}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Header);
