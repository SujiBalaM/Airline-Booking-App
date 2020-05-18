import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Footer from '../common/footer';
import Header from '../common/header';
import axios from 'axios';
import { connect } from 'react-redux';
import { dasboardData } from '../redux/dashboard/action';

class PassengerDetails extends Component {
  constructor(props) {
    console.log('passengerDetails', props);
    super(props);
    this.state = {
      flightId: props.match.params.flightNo,
      passengerData: [],
      columnDefs: [
        {
          headerName: 'Passenger ID',
          field: 'id',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'First Name',
          field: 'firstname',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Last Name',
          field: 'lastname',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Gender',
          field: 'gender',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Seat Number',
          field: 'seatnumber',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Ancillary Services',
          field: 'ancillaryservices',
          cellRenderer: 'ancillaryservicesRender',

          sortable: true,
          filter: true,
        },
      ],
      frameworkComponents: {
        ancillaryservicesRender: this.ancillaryservicesComponent,
      },
    };
  }
  ancillaryservicesComponent = (props) => {
    const { dashboardList } = this.props;
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

  componentDidMount() {
    const { dasboardData } = this.props;
    dasboardData();
  }

  render() {
    const { dashboardList } = this.props;
    console.log('from passenger details com', dashboardList);
    const flightId = this.state.flightId;
    const passengerDetails = dashboardList.data.filter(
      (data) => data.flightNo === flightId
    );
    console.log('passengerDetails------>', passengerDetails);

    return (
      <div>
        <Header />
        <br />
        <h1>List of Passengers</h1>
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
            rowData={passengerDetails}
            frameworkComponents={this.state.frameworkComponents}
          ></AgGridReact>
          <br />
          <Footer />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PassengerDetails);
