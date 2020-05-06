import{ GETPASSENGERDATA_PENDING, GETPASSENGERDATA_FAILURE, GETPASSENGERDATA_SUCCESS } from '../passengers/index';

export function addPassengers(args){
   return(dispatch) => {
      dispatch({ type:GETPASSENGERDATA_PENDING});
      fetch("http://localhost:5000/db/rowData",
      {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: "POST",
         body: JSON.stringify(args)
      })
      .then(function(res){ dispatch({ type:GETPASSENGERDATA_SUCCESS }); })
      .catch(function(res){ dispatch({ type:GETPASSENGERDATA_FAILURE }) })
            
   }
}