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
import Search from '../common/search';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      searchPassengers: [],
      alert: {},
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

  // fetchingRowData = () => {
  //   let datas = this.props.dashboardList.data;
  //   console.log(datas, '-in start of fetching routw dat');
  //   for (let i = 0; i < datas.length; i++) {
  //     if (typeof datas[i].ancillaryservices == 'object') {
  //       let stringservices = '';
  //       for (let j = 0; j < datas[i].ancillaryservices.length; j++) {
  //         let arrayelement = Object.entries(datas[i].ancillaryservices[j]).map(
  //           (value) => {
  //             return value[1];
  //           }
  //         );
  //         stringservices = arrayelement.toString();
  //       }
  //       datas[i].ancillaryservices = stringservices;
  //     }
  //   }
  //   console.log(datas, ' ==========in end od fet');
  //   return datas;
  // };
  componentDidMount() {
    const { dasboardData } = this.props;
    dasboardData();
  }
  searchData = async (text) => {
    const searchDetails = await axios.get(
      `http://localhost:5000/rowData?q=${text}`
    );
    console.log('searchDetails---->', searchDetails);
    this.setState({ searchPassengers: searchDetails });
  };
  clearData = () => {
    this.setState({ searchPassengers: [] });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };
  render() {
    const { dashboardList } = this.props;
    const { searchPassengers } = this.state;

    const datas =
      searchPassengers.length == 0 ? dashboardList : searchPassengers;
    console.log('datas------------------>', datas);
    console.log('searchPassengers.length------------------>', datas.data);
    return (
      <div>
        <Header />
        <br />
        <Search
          searchPassengers={this.searchData}
          clearPassengers={this.clearData}
          showClear={searchPassengers.length !== 0 ? true : false}
          setAlert={this.setAlert}
        />
        {this.state.alert && this.state.alert.msg}
        <br />
        <span>
          <AddPassengers />
        </span>
        <br />
        <div
          className='ag-theme-balham'
          style={{
            height: '400px',
            width: '99%',
            marginLeft: '15px',
            marginRight: '15px',
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            frameworkComponents={this.state.frameworkComponents}
            rowData={datas.data}
          ></AgGridReact>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('stateasdasasd----->', state);
  return {
    dashboardList: state.dashboardAdminList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dasboardData: () => dispatch(dasboardData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
