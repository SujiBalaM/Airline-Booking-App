import { GETDASHBOARDDATA_SUCCESS, GETDASHBOARDDATA_FAILURE } from './index';

export function dasboardData() {
  return (dispatch) => {
    fetch('http://localhost:5000/db')
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        const dasboardData = response.rowData;
        console.log('DBdata', dasboardData);
        dispatch({ type: GETDASHBOARDDATA_SUCCESS });
      });
  };
}
