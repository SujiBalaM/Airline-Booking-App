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
      selectedRowValue:[],
      columnDefs: [
        {
          headerName: 'Sl.No',
          field: 'id',

          width: 75,

          },
        { headerName: 'Flight Number', field: 'flightNo', width: 75 },

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
          cellRenderer: 'ancillaryservicesRender',
          width: 300,
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
      rowSelection: 'single',

      frameworkComponents: {
        iconCellRenderer: ImageComponent,
        ancillaryservicesRender: this.ancillaryservicesComponent,
      },
    };
  }
  ancillaryservicesComponent = (props) => {
    const { dashboardList } = this.props;
    console.log('from dashboard', dashboardList);
    const Id = props.data.id;
    const ancillaryServices = dashboardList.data.ancillaryServices.filter(
      (data) => data.id === Id
    );
    const filteredData = Array.prototype.map.call(
      ancillaryServices,
      (seperatedData) =>
        seperatedData.meals +
        ', ' +
        seperatedData.snacks +
        ',' +
        seperatedData.drinks
    );
    return <div>{filteredData}</div>;
  };
  drop = () => {
    console.log('click');
  };

  componentDidMount() {
    const { dasboardData } = this.props;
    dasboardData();
  }
  searchData = async (text) => {
    const searchDetails = await axios.get(
      `http://localhost:5000/rowData?q=${text}`
    );
    this.setState({ searchPassengers: searchDetails });
  };
  clearData = () => {
    this.setState({ searchPassengers: [] });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };
  onSelectionChanged = (events) => {
    var selectedRows = events.api.getSelectedRows();
    console.log(selectedRows);
    this.setState({selectedRowValue:selectedRows});

  };

  render() {
    const { dashboardList } = this.props;
    const { searchPassengers } = this.state;
    const datas =
      searchPassengers.length == 0 ? dashboardList : searchPassengers;
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
          <AddPassengers data={this.state.selectedRowValue} />
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
            rowSelection='single'
            onSelectionChanged={this.onSelectionChanged.bind(this)}
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
