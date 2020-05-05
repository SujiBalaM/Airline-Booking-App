import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../redux/login/action';
import { Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component {
  successToast = () =>
    toast.success(
      'Successfully Logged In!',
      { position: toast.POSITION.TOP_CENTER },
      { containerId: 'A' },
    );
  failureToast = () =>
    toast.error(
      'Check the username and Password!',
      { containerId: 'B' },
      { position: toast.POSITION.TOP_CENTER },

    );
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    login(email, password);
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { loginusers, history } = this.props;
      if(nextProps.loginusers.isloginPending === false && loginusers.isloginPending === true){
        console.log("loginusers----------->", loginusers.isLoginSuccess)
  
          if (nextProps.loginusers.isLoginSuccess === true) {
            this.successToast();
            window.location.reload();
            history.push('dashboard');
          } else {
            this.failureToast();
          }
    }
  
    // if (loginusers.isLoginSuccess) {
      // window.location.reload();
      
     // history.push('dashboard');
    // }
  }

  render() {
    const { classes } = this.props;
    const { loginusers } = this.props;
    return (
      <div>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <ToastContainer
              enableMultiContainer
              containerId={'A'}
              position={toast.POSITION.TOP_RIGHT}
            />

            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={this.handleClick}
              >
                Sign In
              </Button>
              <ToastContainer />

              <Grid container className={classes.submit}>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginusers: state.loginlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(userLogin(email, password)),
  };
};

export default withStyles(useStyles)(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
