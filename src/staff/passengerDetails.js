import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PassengerDetails extends Component {
   constructor(props) {
      console.log('passengerDetails',props)
      
      super(props);
      this.state = {
         flightId:props.match.params.flightNo
      }

   }


   render() {
      return (
         <div>
<h1>PassengerDetails</h1>
         </div>
      )
   }
}

PassengerDetails.propTypes = {

}

export default PassengerDetails;