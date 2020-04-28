import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

// import Welcome from './components/Welcome/Welcome';
import Header from './common/Header';
// import NotFound from './components/NotFound/NotFound';
import Login from './admin/pages/login';

const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/test" component={Header}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;