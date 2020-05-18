import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const CheckinList = (props) => {
  return (
    <div>
      <Button
        component={Link}
        to={`/checkinDetails/${props.data.flightNo}`}
        name='submit'
        color='primary'
      >
        Checkin Details
      </Button>
    </div>
  );
};

export default CheckinList;
