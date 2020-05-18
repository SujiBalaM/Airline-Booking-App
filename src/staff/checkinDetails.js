import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Header from '../common/header';

import Footer from '../common/footer';

class CheckinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 70,
    };
  }

  getUserSeats() {
    let i = 0;
    let seats = [];
    while (i < this.state.points) {
      i++;
      seats.push(
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
        >
          <path d='M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z' />
        </svg>
      );
    }
    return seats;
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <h4>Passenger Checked In Details</h4>
        <br />
        <div>{this.getUserSeats(this.state.points)}</div>

        <Footer />
      </div>
    );
  }
}

export default CheckinDetails;
