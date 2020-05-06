import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
class ImageComponent extends Component {
  render() {
    return (
      <div>
        <span>
          <AddIcon />
        </span>
        <span>
          <CreateIcon />
        </span>
        <span>
          <DeleteIcon />
        </span>
      </div>
    );
  }
}
export default ImageComponent;
