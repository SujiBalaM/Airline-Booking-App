import { GETDASHBOARDDATA_SUCCESS, GETDASHBOARDDATA_FAILURE } from './index';

export function dasboardData() {
  return (dispatch) => {
    fetch('http://localhost:5000/db')
      .then((data) => data.json())
      .then((response) => {
        const dasboardData = response.rowData;
        dispatch({ type: GETDASHBOARDDATA_SUCCESS, payload: dasboardData });
      });
  };
}
