import {
  ADDPASSENGERDATA_PENDING,
  ADDPASSENGERDATA_FAILURE,
  ADDPASSENGERDATA_SUCCESS,
  UPDATEPASSENGERDATA_SUCCESS,
  UPDATEPASSENGERDATA_PENDING,
  UPDATEPASSENGERDATA_FAILURE,
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

export function updatePassengers(args) {
  const id = args.id;
  return (dispatch) => {
    dispatch({ type: UPDATEPASSENGERDATA_PENDING });
    axios
      .put(`http://localhost:5000/rowData/${id}`, args)
      .then((resp) => {
        dispatch({ type: UPDATEPASSENGERDATA_SUCCESS });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: UPDATEPASSENGERDATA_FAILURE });
      });
  };
}
