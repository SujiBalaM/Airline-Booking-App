export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const intialState = {
  isLoginSuccess: false,
  isloginFailure: false,
  isloginPending: false,
  isLoggedout: false,
};

export default function loginReducer(state = intialState, action = {}) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoginSuccess: false,
        isloginPending: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: true,
        isloginFailure: false,
        isloginPending: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isloginFailure: true,
        isloginPending: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedout: true,
      };
    default:
      return state;
  }
}
