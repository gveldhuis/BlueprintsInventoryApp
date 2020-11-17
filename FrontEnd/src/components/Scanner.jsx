import React from 'react';
import CameraFeed from './Camera';
import ScanForm from './ScanForm';
import { createWorker } from 'tesseract.js';

class Scanner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCamera: true,
      imageText: '',
      worker: createWorker(),
    };
    this.toggleCamera = this.toggleCamera.bind(this);
    this.scanImage = this.scanImage.bind(this);
  }

  toggleCamera() {
    this.setState((prevState) => ({
      showCamera: !prevState.showCamera
    }));
  }

  async scanImage(image) {
    const { worker } = this.state;

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    // TODO: Pre-process image so Tesseract recognition is better on web-cam images
    try {
      const { data: { text } } = await worker.recognize(image);
      console.log(text);
      this.setState({
        imageText: text,
      });
    } catch(err) {
      console.log(err);
    }
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