import React, { Component } from 'react';
import Header from '../common/header';
import { connect } from 'react-redux';
import { dasboardData } from '../redux/dashboard/action';
import StarIcon from '@material-ui/icons/Star';
import Footer from '../common/footer';
import { Color } from 'ag-grid-community';

class CheckinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 70,
      flightId: props.match.params.flightNo,
      ancillaryServices: '',
    };
  }
  componentDidMount() {
    const { dasboardData } = this.props;
    dasboardData();
  }

  getUserSeats(totalSeats, checkedInPassangers, ancillaryServices) {
    let i = 0;
    let seats = [];
    while (i < totalSeats) {
      i++;
      let color = checkedInPassangers
        .map((n) => (n.seatnumber === `A${i}` ? n.id : false))
        .filter((x) => x);

      let services =
        ancillaryServices &&
        ancillaryServices
          .map((m) => (m.id === color[0] ? true : false))
          .filter((x) => x);
      seats.push(
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            className={`seat-icon`}
          >
            <path
              d='M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z'
              fill={`${color.length === 0 ? 'red' : 'green'}`}
            />
          </svg>

          {services && services.length !== 0 ? (
            <StarIcon className='star' />
          ) : (
            ''
          )}
          <span>{`A${i}`}</span>
        </div>
      );
    }
    return seats;
  }

  render() {
    const { dashboardList } = this.props;
    const flightId = this.state.flightId;
    const checkinDetails = dashboardList.data.filter(
      (data) => data.flightNo === flightId
    );

    const ancillaryServices =
      dashboardList.data && dashboardList.data.ancillaryServices;
    return (
      <div>
        <Header />
        <br />
        <h4>Passenger Checked In Details</h4>
        <br />
        <span> Red color Seat --- Empty</span>
        <br />
        <span> Green color Seat --- Checked In</span>
        <br />
        <span> Star with Green color Seat --- Ancillary Services Req</span>
        <br />
        <br />
        <div className='seats'>
          {this.getUserSeats(
            this.state.points,
            checkinDetails,
            ancillaryServices
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckinDetails);
