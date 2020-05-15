import {
  ADDANCILLERY_PENDING,
  ADDANCILLERY_SUCCESS,
  ADDANCILLERY_FAILURE,
  EDITANCILLERY_PENDING,
  EDITANCILLERY_SUCCESS,
  EDITANCILLERY_FAILURE,
} from '../ancillery/index';
import axios from 'axios';

export function addAncillery(args) {
  console.log("addAncillery",args)
  return (dispatch) => {
    dispatch({ type: ADDANCILLERY_PENDING });
    axios
      .post('http://localhost:5000/ancillaryservices', args)
      .then((response) => {
        console.log(response);
        dispatch({ type: ADDANCILLERY_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: ADDANCILLERY_FAILURE });
      });
  };
}

export function deleteAncillery(id) {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/ancillaryservices/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateAncillery(args) {
  const id = args.id;
  return (dispatch) => {
    dispatch({ type: EDITANCILLERY_PENDING });
    axios
      .put(`http://localhost:5000/ancillaryservices/${id}`, args)
      .then((response) => {
        console.log(response);
        dispatch({ type: EDITANCILLERY_SUCCESS, id });
      })
      .catch((error) => {
        dispatch({ type: EDITANCILLERY_FAILURE });
      });
  };
}
