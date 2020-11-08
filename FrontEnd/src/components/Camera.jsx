import React from 'react';
import Webcam from 'react-webcam';

class CameraFeed extends React.Component {
  /*
  Props:
  - toggleCamera callback function
  - scanImage callback function

  State:
  - webcamRef: webcam reference attached to rendered camera element for getting images

  Methods:
  - setRef: Sets the webcamRef when WebCam is rendered so we can get images from it
  - handleClick: Gets an image from the webcam in base64 string encoding, adds a Buffer to
                 it and runs it and passes it to the scanImage function passed down
  */
  constructor(props) {
    super(props);
    this.state = {
      webcamRef: null,
    };
    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setRef(webcam) {
    this.setState({
      webcamRef: webcam,
    });
  }

  handleClick() {
    // Retrieve reference to webcam attached to Webcam component
    const { webcamRef } = this.state;
    // Get base64-encoded screenshot from webcam and create base64 buffer
    const image = Buffer.from(webcamRef.getScreenshot(), 'base64');
    console.log("Image taken");
  }

  render() {
    return (
      <div>
        <Webcam 
          audio={false}
          className="h-screen object-cover landscape:w-screen"
          screenshotFormat="image/png"
          ref={this.setRef}
        />
        <div className="flex justify-center">
          <button 
            className="absolute bottom-nav far fa-circle text-white text-6xl focus:outline-none active:text-indigo-300"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

 export default CameraFeed;