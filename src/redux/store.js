import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './login';
import dashboardReducer from './dashboard/index';

const middleWares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(require('redux-logger').default);
}

const finalCreateStore = composeWithDevTools(applyMiddleware(...middleWares))(
  createStore
);

let rootReducer = combineReducers({
  loginlist: loginReducer,
  dashboardAdminList: dashboardReducer,
});

const initialState = window.__INITIAL_STATE__;
export const store = finalCreateStore(rootReducer, initialState);
