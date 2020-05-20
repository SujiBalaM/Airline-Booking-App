import React, { Component } from 'react';
import { Button, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddPassengerDialog from '../admin/addPassengerDialog';
// import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

class AddPassengers extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      isOpen: false,
      asAddData: [],
      mode: 'add',
    };
  }
  handleClickOpen = (args) => {
    const { selectedRowData } = this.props;

    if (args === 'add') {
      this.setState({ isOpen: true, mode: 'add' });
    } else {
      const data = this.props.dashboardList.filter(
        (response, { key: id }) => response.id === this.props.data.id
      );
      this.setState({ isOpen: true, asAddData: data[0], mode: 'edit' });
    }
  };

  hanldeClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { dashboardList } = this.props;
    const { selectedRowData } = this.props;
    console.log('selectedRowData', selectedRowData);

    console.log('addPassenger Component', dashboardList);
    // console.log(props);
    // const [open, setOpen] = React.useState(false);
    // const [gender, setGender] = React.useState('Male');
    // const [mode, setMode] = React.useState('add');
    // const handleClickOpen = (args) => {
    //   setOpen(true);
    // };

    // const hanldeClose = (args) => {
    //   setOpen(false);
    // };

    return (
      <div>
        <Button
          color='primary'
          variant='contained'
          onClick={() => this.handleClickOpen('add')}
          style={{
            marginRight: '10px',
            marginLeft: '10px',
          }}
        >
          Add Passengers
        </Button>
        <Button
          color='primary'
          variant='contained'
          onClick={() => this.handleClickOpen('edit')}
          style={{
            marginRight: '10px',
            marginLeft: '10px',
          }}
        >
          Update Passengers
        </Button>
        {this.state.isOpen && (
          <AddPassengerDialog
            isOpen={this.state.isOpen}
            actionHandleClose={this.hanldeClose}
            passengerData={this.state.asAddData}
            currentmode={this.state.mode}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('########', state);
  return {
    dashboardList: state.dashboardAdminList.data,
  };
};

export default connect(mapStateToProps)(AddPassengers);
