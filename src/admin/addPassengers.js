import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddPassengerDialog from '../admin/addPassengerDialog';
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
    super(props);
    this.state = {
      isOpen: false,
      asAddData: [],
      mode: 'add',
      selectRowData: this.props.selectedRowData.id,
    };
  }
  handleClickOpen = (args) => {
    const { selectedRowData } = this.props;
    if (args === 'add') {
      this.setState({ isOpen: true, mode: 'add' });
    } else {
      const data = this.props.dashboardList.filter(
        (response, { key: id }) => response.id === selectedRowData[0].id
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
    return (
      <div>
        <Button
          color='primary'
          variant='contained'
          onClick={() => this.handleClickOpen('add')}
          style={{
            marginRight: '10px',
            marginLeft: '10px',
            fontSize: '12px',
          }}
        >
          Add Passengers
        </Button>
        {selectedRowData.length > 0 && (
          <Button
            color='primary'
            variant='contained'
            onClick={() => this.handleClickOpen('edit')}
            style={{
              marginRight: '10px',
              marginLeft: '10px',
              fontSize: '12px',
            }}
          >
            Update Passengers
          </Button>
        )}

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
  return {
    dashboardList: state.dashboardAdminList.data,
  };
};

export default connect(mapStateToProps)(AddPassengers);
