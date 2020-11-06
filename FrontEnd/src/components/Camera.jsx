import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class WebCam extends React.Component {
  /*
  Props:
  - toggleCamera callback function
  - scanImage callback function
  */

  render() {
    function handleTakePhoto (dataUri) {
      console.log('takePhoto');
    }

    return (
      <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        // isFullscreen = {true} the stretching is tooo much for me
        imageCompression = {0.5}
      />
    );
  }
}

 export default WebCam;