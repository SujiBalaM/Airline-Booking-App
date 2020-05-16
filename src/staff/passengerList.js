import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const handleClickOpen = () => {
  const { history } = this.props;
  history.push('/passengerDetails/43')
}
const PassengerList = (props) => {
  console.log('passengerList',props)
  return (
    <div>
      <Button component = {Link} to={`/passengerDetails/${props.data.flightNo}`} name='submit' color='primary' >
        Passenger List
      </Button>
    </div>
  );
};

export default PassengerList;
