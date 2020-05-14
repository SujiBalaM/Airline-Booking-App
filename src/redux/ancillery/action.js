import {
  ADDANCILLERY_PENDING,
  ADDANCILLERY_SUCCESS,
  ADDANCILLERY_FAILURE,
} from '../ancillery/index';
import axios from 'axios';

export function addAncillery(args) {
  return (dispatch) => {
    axios
      .post('http://localhost:5000/ancillaryServices', args)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteAncillery(args) {
  return (dispatch) => {
    axios
      .delete('http://localhost:5000/ancillaryServices/1/', args)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateAncillery(args) {
  return (dispatch) => {
    axios
      .put('http://localhost:5000/ancillaryServices/${id}', args)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
