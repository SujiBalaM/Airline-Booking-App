import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './App';
import Login from './admin/login';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './admin/dashboard';
const history = createHistory();

const userDetails = localStorage.getItem('user');
const userInfo = JSON.parse(userDetails);
console.log('userInfo--->', userInfo);
// userdetails value = null login
// userdetails value = availabel dashboard
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          path='/login'
          render={(props) =>
            !userInfo ? (
              <Login {...props} />
            ) : (
              <Redirect to={{ pathname: '/dashboard' }} />
            )
          }
        />
        {/* {
  loginusers.isLoginSuccess && <Route exact path = '/dashboard' component={Dashboard}/>:
  <Redirect to={{ pathname:'/login'}}/>
} */}
        {/* <Route path="/login" render={props => (
					 user && user.role === "admin" 
						? <Login {...props} />
						: <Redirect to={{ pathname: '/login'}} />
				)} /> */}
        {
          <Route
            path='/dashboard'
            render={(props) =>
              userInfo ? (
                <Dashboard {...props} />
              ) : (
                <Redirect to={{ pathname: '/login' }} />
              )
            }
          />
        }
        <Route exact path='/' component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
