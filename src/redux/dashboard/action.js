import { GETDASHBOARDDATA_SUCCESS, GETDASHBOARDDATA_FAILURE } from './index';

export function dasboardData() {
  return (dispatch) => {
    fetch('http://localhost:5000/db')
      .then((data) => data.json())
      .then((response) => {
        const dasboardData = response.rowData;
        console.log('dasboardData asd', dasboardData);
        fetch('http://localhost:5000/ancillaryServices/1')
          .then((data) => data.json())
          // data
          //   .forEach((element) => {
          //     console.log(
          //       `${element.meal},${element.snacks},${element.drinks}`
          //     );
          //   })
          .then((res) => {
            dasboardData.ancillaryservices = res;
          });

        dispatch({ type: GETDASHBOARDDATA_SUCCESS, payload: dasboardData });
      });
  };
}
