import {
  ADDANCILLERY_PENDING,
  ADDANCILLERY_SUCCESS,
  ADDANCILLERY_FAILURE,
} from '../ancillery/index';
import axios from 'axios';

export function addAncillery(args) {
  return (dispatch) => {
    axios
      .post('http://localhost:5000/ancillaryservices', args)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteAncillery(id) {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/ancillaryservices/${id}`,id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateAncillery(id) {
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/ancillaryservices/${id}`,id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
