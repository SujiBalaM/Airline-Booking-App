import { LOGIN_PENDING, LOGIN_SUCCESS,LOGIN_FAILURE } from './index';

export function userLogin (email, password) {
   const emailName = email;
   return (dispatch) => {
      dispatch({ type: LOGIN_PENDING } );
      fetch('http://localhost:5000/db')
      .then(response => response.json())
      .then(res => {
            const email = res && res.users.filter( x => x.email === emailName );
            if(email.length !== 0){
               dispatch({ type: LOGIN_SUCCESS, user: email  } );
               localStorage.setItem("user", JSON.stringify(email));
            }else{
               dispatch({type:LOGIN_FAILURE});
            }
      });
   }
}
