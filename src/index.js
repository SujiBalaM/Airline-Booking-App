import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect } from 'react-router-dom';
import {Switch, Route} from 'react-router';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './index.css';
import App from './App';
import Login from './admin/login'
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();


ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>  
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
