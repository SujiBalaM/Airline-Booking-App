export const GETPASSENGERDATA_PENDING ='GETPASSENGERDATA_PENDING';
export const GETPASSENGERDATA_SUCCESS = 'GETPASSENGERDATA_SUCCESS';
export const GETPASSENGERDATA_FAILURE = 'GETPASSENGERDATA_FAILURE';

const initialState = {
   isDataPending: false,
   isDataSuccess: false,
   isDataFailure: false,
};
export default function passengersReducer( state = initialState,action={}) {
switch(action.type) {
case GETPASSENGERDATA_PENDING: 
return {
   ...state,
   isDataPending: true
};
case GETPASSENGERDATA_SUCCESS: 
return {
   ...state,
   isDataSuccess:true
};
case GETPASSENGERDATA_FAILURE:
return{
   ...state,
   isDataFailure: true
};
default:
   return{
      ...state
   };
}
}
