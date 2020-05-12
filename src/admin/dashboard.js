import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Slide } from '@material-ui/core';
import { connect } from 'react-redux';
import { dasboardData } from '../redux/dashboard/action';
import Footer from '../common/footer';
import Header from '../common/header';
import Button from '@material-ui/core/Button';
import ImageComponent from '../admin/image';
import AddPassengers from './addPassengers';
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      columnDefs: [
        { headerName: 'Sl.No', field: 'id', width: 75 },
        { headerName: 'First Name', field: 'firstname', width: 100 },
        { headerName: 'Last Name', field: 'lastname', width: 100 },
        { headerName: 'Gender', field: 'gender', sortable: true, width: 75 },
        { headerName: 'Date of Birth', field: 'DOB', filter: true, width: 100 },
        {
          headerName: 'Passport Number',
          field: 'passportnumber',
          filter: true,
          width: 110,
        },
        { headerName: 'Address', field: 'address', filter: true, width: 175 },
        {
          headerName: 'Ancillary Services',
          field: 'ancillaryservices',
          width: 150,
        },
        {
          headerName: 'Ancillary Actions',
          cellRenderer: 'iconCellRenderer',
          width: 120,
        },
        {
          headerName: 'Seat Number',
          field: 'seatnumber',
          sortable: true,
          filter: true,
          width: 100,
        },
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 1,
        editable: true,
        resizable: true,
      },

      frameworkComponents: { iconCellRenderer: ImageComponent },
    };
  }

  drop = () => {
    console.log('click');
  };

  componentDidMount() {
    const { dasboardData } = this.props;
    dasboardData();
  }

  render() {
    const { dashboardList } = this.props;
    return (
      <div>
        <Header />
        <h3>Passenger List</h3>
        <AddPassengers />
        <br />
        <div
          className='ag-theme-balham'
          style={{
            height: '400px',
            width: '99%',
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            frameworkComponents={this.state.frameworkComponents}
            rowData={dashboardList.data}
          ></AgGridReact>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state----->', state);
  return {
    dashboardList: state.dashboardAdminList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dasboardData: () => dispatch(dasboardData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
