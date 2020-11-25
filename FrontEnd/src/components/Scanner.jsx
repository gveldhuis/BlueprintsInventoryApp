import React from 'react';
import CameraFeed from './Camera';
import ScanForm from './ScanForm';
import Authentication from 'utils/Auth';

class Scanner extends React.Component {
  /*
  State:
  - showCamera: flag used to render Camera or not
  - manualEntry: flag used to init ScanForm at SupplySearch or not
  - imageText: text retrieved from Tesseract
  - worker: A Tesseract worker
  */

  constructor(props){
    super(props);
    this.state = {
      showCamera: true,
      manualEntry: false,
      imageText: '',
    };
    this.showCamera = this.showCamera.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showCamera() {
    this.setState({
      showCamera: true,
    });
  }

  showForm(manual, imageText){
    this.setState({
      showCamera: false,
      manualEntry: manual,
      imageText: imageText,
    });
  }

  render() {
    const { showCamera, manualEntry, imageText } = this.state;

    if (showCamera) {
      return (
        <CameraFeed showForm={this.showForm} />
      );
    } else {
      return (
        <Authentication.Consumer>
          {(auth) =>
            <ScanForm
              showCamera={this.showCamera}
              manualEntry={manualEntry}
              imageText={imageText}
              auth={auth}
            />            
          }
        </Authentication.Consumer>
      );
    }
  }
}

export default Scanner;