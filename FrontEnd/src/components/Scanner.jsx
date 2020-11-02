import React from 'react';
import WebCam from './Camera';

class Scanner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCamera: true,
      imageText: '',
    };
  }

  // TODO:
  //    - Conditionally render Camera or ScanForm based on state
  //    - Add callBack function to set showCamera state and pass to Camera and ScanForm
  render() {
    return (
      <WebCam />
    );
  }
}

export default Scanner;