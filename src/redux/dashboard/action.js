import { GETDASHBOARDDATA_SUCCESS, GETDASHBOARDDATA_FAILURE } from './index';

export function dasboardData() {
  return (dispatch) => {
    fetch('http://localhost:5000/db')
      .then((data) => data.json())
      .then((response) => {
        const dasboardData = response.rowData;
        // const json = [{
        //   slno: '1',
        //   firstname: 'Sujatha',
        //   lastname: 'Mano',
        //   gender: 'F',
        //   DOB: '07/06/85',
        //   passportnumber: 'AC123',
        //   address: '#48,s1,kubera flats,chennai',
        //   ancillaryservices: 'req Food',
        //   seatnumber: 'F1',
        // }];
        dispatch({ type: GETDASHBOARDDATA_SUCCESS,payload:dasboardData });
      });
  };
}
