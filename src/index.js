import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import Login from './admin/login';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './admin/dashboard';
import FlightList from './flight/flightList';
import PassengerDetails from './staff/passengerDetails';
import CheckinDetails from './staff/checkinDetails';
const history = createHistory();

const userDetails = localStorage.getItem('user');
const userInfo = JSON.parse(userDetails);
const googleUserDetails = localStorage.getItem('userInfo');
const googleUser = JSON.parse(googleUserDetails);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          path='/login'
          render={(props) => {
            return !userInfo && !googleUser ? (
              <Login {...props} />
            ) : googleUser ? (
              <Redirect to={{ pathname: '/flightList' }} />
            ) : (
              <Redirect to={{ pathname: '/dashboard' }} />
            );
          }}
        />

        {
          <Route
            path='/dashboard'
            render={(props) =>
              googleUser || userInfo ? (
                googleUser ? (
                  <FlightList {...props} />
                ) : (
                  <Dashboard {...props} />
                )
              ) : (
                <Redirect to={{ pathname: '/login' }} />
              )
            }
          />
        }
        {
          <Route
            path='/flightList'
            render={(props) =>
              googleUser ? (
                <FlightList {...props} />
              ) : (
                <Redirect to={{ pathname: '/login' }} />
              )
            }
          />
        }
        {/* {
          <Route
            path='/flightList'
            render={(props) =>
              userInfo && userInfo.role === 'staff' ? (
                <FlightList {...props} />
              ) : (
                <Redirect to={{ pathname: '/login' }} />
              )
            }
          />
        } */}
        <Route
          path='/passengerDetails/:flightNo'
          render={(props) => {
            return !userInfo && !googleUser ? (
              <Redirect to={{ pathname: '/login' }} />
            ) : (
              <PassengerDetails {...props} />
            );
          }}
        />
        <Route
          path='/checkinDetails/:flightNo'
          render={(props) => {
            return !userInfo && !googleUser ? (
              <Redirect to={{ pathname: '/login' }} />
            ) : (
              <CheckinDetails {...props} />
            );
          }}
        />
        <Route
          exact
          path='/'
          render={(props) => {
            return !userInfo && !googleUser ? (
              <Login {...props} />
            ) : googleUser ? (
              <Redirect to={{ pathname: '/flightList' }} />
            ) : (
              <Redirect to={{ pathname: '/dashboard' }} />
            );
          }}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
