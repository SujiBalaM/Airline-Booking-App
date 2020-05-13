import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddServicesForm from './addServicesForm';
class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }
  handleClickOpen() {
    const { isOpen } = this.state;
    console.log('from Image component', this.state);
    this.setState({ isOpen: true });
  }
  handleClose() {
    this.setState({ isOpen: false });
  }
  render() {
    const { data } = this.props;
    console.log('state', this.state);
    console.log('props', this.props);
    return (
      <div>
        <span>
          <AddIcon onClick={this.handleClickOpen} />
        </span>
        <span>
          <CreateIcon />
        </span>
        <span>
          <DeleteIcon />
        </span>

        <AddServicesForm data={this.props.data} isOpen={this.state.isOpen} actionHandleClose={this.handleClose} />
      </div>
    );
  }
}
export default ImageComponent;
