import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const userDetails = localStorage.getItem('user');
const user = JSON.parse(userDetails);
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
  handleClick() {
    localStorage.clear('user');
    window.location.reload();
    this.props.history.push('/');
  }
  render() {
    const { classes } = this.props;
    const { history } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Welcome {user[0].first_name}
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
