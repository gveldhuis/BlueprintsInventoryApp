import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class WebCam extends React.Component {
  

  render() {
    const videoConstraints = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    function handleTakePhoto (dataUri) {
      // Do stuff with the photo...
      console.log('takePhoto');
    }

    return (
      <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        isFullscreen = {true}
        imageCompression = {0.5}
      />
    );
  }
}

 export default WebCam;