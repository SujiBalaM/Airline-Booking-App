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
      .post('http://localhost:5000/rowData', args)
      .then((resp) => {
        dispatch({ type: ADDPASSENGERDATA_SUCCESS });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ADDPASSENGERDATA_FAILURE });
      });
  };
}

