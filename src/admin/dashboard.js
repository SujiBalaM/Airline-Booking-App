import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Slide } from '@material-ui/core';
import { connect } from 'react-redux';
import { dasboardData } from '../redux/dashboard/action';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      columnDefs: [
        { headerName: 'Sl.No', field: 'slno' },
        { headerName: 'First Name', field: 'firstname' },
        { headerName: 'Last Name', field: 'lastname' },
        { headerName: 'Gender', field: 'gender', sortable: true },
        { headerName: 'Date of Birth', field: 'DOB', filter: true },
        {
          headerName: 'Passport Number',
          field: 'passportnumber',
          filter: true,
        },
        { headerName: 'Address', field: 'address', filter: true },
        { headerName: 'Ancillary Service', field: 'ancillaryservices' },
        {
          headerName: 'Seat Number',
          field: 'seatnumber',
          sortable: true,
          filter: true,
        },
      ],
      rowData: [
        {
          slno: '1',
          firstname: 'Sujatha',
          lastname: 'Mano',
          gender: 'F',
          DOB: '07/06/85',
          passportnumber: 'AC123',
          address: '#48,s1,kubera flats,chennai',
          ancillaryservices: 'req Food',
          seatnumber: 'F1',
        },
        {
          slno: '1',
          firstname: 'Sujatha',
          lastname: 'Mano',
          gender: 'F',
          DOB: '07/06/85',
          passportnumber: 'AC123',
          address: '#48,s1,kubera flats,chennai',
          ancillaryservices: 'req Food',
          seatnumber: 'F1',
        },
        {
          slno: '1',
          firstname: 'Sujatha',
          lastname: 'Mano',
          gender: 'F',
          DOB: '07/06/85',
          passportnumber: 'AC123',
          address: '#48,s1,kubera flats,chennai',
          ancillaryservices: 'req Food',
          seatnumber: 'F1',
        },
        {
          slno: '1',
          firstname: 'Sujatha',
          lastname: 'Mano',
          gender: 'F',
          DOB: '07/06/85',
          passportnumber: 'AC123',
          address: '#48,s1,kubera flats,chennai',
          ancillaryservices: 'req Food',
          seatnumber: 'F1',
        },
        {
          slno: '1',
          firstname: 'Sujatha',
          lastname: 'Mano',
          gender: 'F',
          DOB: '07/06/85',
          passportnumber: 'AC123',
          address: '#48,s1,kubera flats,chennai',
          ancillaryservices: 'req Food',
          seatnumber: 'F1',
        },
        {
          slno: '1',
          firstname: 'Sujatha',
          lastname: 'Mano',
          gender: 'F',
          DOB: '07/06/85',
          passportnumber: 'AC123',
          address: '#48,s1,kubera flats,chennai',
          ancillaryservices: 'req Food',
          seatnumber: 'F1',
        }
      ],
    };
  }

  componentDidMount(){
    const {dasboardData} = this.props;
    dasboardData();
  }

  render() {
    const { dashboardList } = this.props;
    return (
      <div
        className='ag-theme-balham'
        style={{
          height: '600px',
          width: '100%',
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={dashboardList.data}
        ></AgGridReact> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dashboardList: state.dashboardAdminList,
  };
};

const mapDispatchToProps = ( dispatch ) => ({
  dasboardData: () => dispatch(dasboardData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
