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
        {
          headerName: 'Ancillary Service',
          cellRenderer: 'iconCellRenderer',
          field: 'ancillaryservices',
        },
        {
          headerName: 'Seat Number',
          field: 'seatnumber',
          sortable: true,
          filter: true,
        },
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 130,
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
            width: '100%',
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
  return {
    dashboardList: state.dashboardAdminList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dasboardData: () => dispatch(dasboardData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
