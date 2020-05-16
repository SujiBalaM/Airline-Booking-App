import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Footer from '../common/footer';
import Header from '../common/header';
import PassengerList from '../staff/passengerList';
import CheckinDetails from '../staff/checkinDetails';
import { connect } from 'react-redux';
import { getFlightDetails } from '../redux/flight/action';

class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightList: this.props.flightList,
      columnDefs: [
        {
          headerName: 'Flight Number',
          field: 'flightNo',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Flight Name',
          field: 'flightName',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Flight From',
          field: 'flightFrom',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Flight To',
          field: 'flightTo',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Departure',
          field: 'flightDeparture',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Passenger List',
          field: 'passengerList',
          cellRenderer: 'buttonRenderer',
        },
        {
          headerName: 'Checkin Details',
          field: 'checkinDetails',
          cellRenderer: 'checkinbuttonRenderer',
        },
      ],
      rowData: [
        {
          flightNo: 'A123',
          flightName: 'Airlines',
          flightFrom: 'Chennai',
          flightTo: 'Bangalore',
          flightDeparture: '6.30.A.M',
          passengerList: '',
          checkinDetails: '',
        },
      ],

      frameworkComponents: {
        buttonRenderer: PassengerList,
        checkinbuttonRenderer: CheckinDetails,
      },
    };
  }
  componentDidMount() {
    const { flightDetails, flightList } = this.props;
    flightDetails();
    console.log('fligh from did mount', this.props.flightList);
    this.setState({ flightList: this.props.flightList });
  }

  render() {
    const { flightList } = this.props;
    return (
      <div>
        <Header />
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
            rowData={flightList.data}
          ></AgGridReact>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('flight----->', state);
  return {
    flightList: state.flightData,
  };
};
const mapDispatchToProps = (dispatch) => ({
  flightDetails: () => dispatch(getFlightDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
