import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddServicesForm from './addServicesForm';
import { DialogTitle, DialogContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { connect } from 'react-redux';
import { deleteAncillery } from '../redux/ancillery/action';

class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      show: false,
      asData: [],
      mode: 'add',
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.clickOpen = this.clickOpen.bind(this);
    this.clickClose = this.clickClose.bind(this);
  }
  handleClickOpen(args) {
    console.log('from Image args', args);
    if (args === 'add') {
      const { isOpen } = this.state;
      console.log('from Image component', this.state);
      this.setState({ isOpen: true, mode: 'add' });
    } else {
      const data = this.props.dashboardList.filter(
        (response, { key: id }) => response.id === this.props.data.id
      );
      this.setState({ isOpen: true, asData: data[0], mode: 'edit' });
    }
  }
  clickOpen() {
    const { show } = this.state;
    this.setState({ show: true });
    const id = this.props.data.id;
    this.props.deletingServices(id);
  }
  handleDelete = (event) => {
    const id = this.props.data.id;
    this.props.deletingServices(id);
  };

  clickClose() {
    this.setState({ show: false });
  }
  handleClose() {
    this.setState({ isOpen: false });
  }
  render() {
    const { data } = this.props;
    const { dashboardList } = this.props;

    return (
      <div>
        <span>
          <AddIcon onClick={() => this.handleClickOpen('add')} />
        </span>
        <span>
          <CreateIcon onClick={() => this.handleClickOpen('edit')} />
        </span>
        <span>
          <DeleteIcon onClick={this.clickOpen} />
          <Dialog open={this.state.show} onClose={this.clickClose}>
            <DialogTitle id='form-dialog-title'>
              Delete Anciallery Services
            </DialogTitle>
            <DialogContent>Are you sure you want to delete?</DialogContent>
            <DialogActions>
              <Button onClick={this.clickClose} name='cancel' color='primary'>
                Cancel
              </Button>
              <Button
                type='submit'
                name='submit'
                color='primary'
                onClick={this.clickClose}
              >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </span>
        {this.state.isOpen && (
          <AddServicesForm
            data={this.props.data}
            isOpen={this.state.isOpen}
            asData={this.state.asData}
            actionHandleClose={this.handleClose}
            currentmode={this.state.mode}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dashboardList: state.dashboardAdminList.data.ancillaryServices,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletingServices: (id) => dispatch(deleteAncillery(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageComponent);
