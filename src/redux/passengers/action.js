import {
  ADDPASSENGERDATA_PENDING,
  ADDPASSENGERDATA_FAILURE,
  ADDPASSENGERDATA_SUCCESS,
} from '../passengers/index';
import axios from 'axios';

export function addPassengers(args) {
  return (dispatch) => {
    dispatch({ type: ADDPASSENGERDATA_PENDING });
    axios
      .post('http://localhost:5000/rowData', {
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
      })
      .then((resp) => {
        console.log('response', resp);
        dispatch({ type: ADDPASSENGERDATA_SUCCESS });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ADDPASSENGERDATA_FAILURE });
      });
  };
}
