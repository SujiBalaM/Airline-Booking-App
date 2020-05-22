import {
  FLIGHTDETAILS_PENDING,
  FLIGHTDETAILS_SUCCESS,
  FLIGHTDETAILS_FAILURE,
} from './index';

export function getFlightDetails() {
  return (dispatch) => {
    fetch('http://localhost:5000/db')
      .then((response) => response.json())
      .then((flightData) => {
        const flightDetails = flightData.flightDetails;
        dispatch({ type: FLIGHTDETAILS_SUCCESS, payload: flightDetails });
      });
  };
}
