import React from 'react';
import CameraFeed from './Camera';
import ScanForm from './ScanForm';
import Tesseract from 'tesseract.js';

class Scanner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCamera: true,
      imageText: '',
    };
    this.toggleCamera = this.toggleCamera.bind(this);
    this.scanImage = this.scanImage.bind(this);
  }

  toggleCamera() {
    this.setState((prevState) => ({
      showCamera: !prevState.showCamera
    }));
  }

  scanImage() {
    // TODO: Implement this
  }

  render() {
    const { showCamera, imageText } = this.state;

    if (showCamera) {
      return (
        <CameraFeed toggleCamera={this.toggleCamera} scanImage={this.scanImage} />
      );
    } else {
      return (
        <ScanForm toggleCamera={this.toggleCamera} imageText={imageText} />
      );
    }
  }
}

export default Scanner;