import React from 'react';
import Webcam from 'react-webcam';
import Jimp from 'jimp/es';
import { createWorker } from 'tesseract.js';
import makeCancelable from 'utils/CancelablePromise';

class CameraFeed extends React.Component {
  /*
  Props:
  - showForm callback function
  - scanImage callback function

  State:
  - worker: Tesseract worker for image recognition
  - webcamRef: webcam reference attached to rendered camera element for getting images
  - workerLoaded: Flag to prevent initializing worker more than once
  - runningOCR: Flag to show popup / disable buttons
  - imageTask: Promise of image recognition that we can cancel

  Methods:
  - setRef: Sets the webcamRef when WebCam is rendered so we can get images from it
  - handleClick: Gets an image from the webcam in base64 string encoding, adds a Buffer to
                 it and runs it and passes it to the scanImage function passed down
  */
  constructor(props) {
    super(props);
    this.state = {
      worker: createWorker(),
      webcamRef: null,
      workerLoaded: false,
      runningOCR: false,
      imageTask: null,
    };
    this.setRef = this.setRef.bind(this);
    this.handleCameraClick = this.handleCameraClick.bind(this);
    this.cancelImageTask = this.cancelImageTask.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  // Helper function to get reference to Webcam - this is how we access the
  // camera component that we create in the render function
  setRef(webcam) {
    this.setState({
      webcamRef: webcam,
    });
  }

  // Starts and stores the image processing task - note this function is synchronous
  // To understand what's going on in this function, read about JS promises and their syntax
  // The general idea is we create a task/promise of running the scanImage function which runs
  // asynchronously - we then attach callback functions to run once that function succeeds or fails
  // - then we store the promise (so we can cancel it if we need to) and set our state to running OCR
  handleCameraClick() {
    const task = makeCancelable(new Promise(resolve => {
      resolve(this.scanImage());
    }));

    task.promise.then((text) => {
      // When task succeeds OCR is complete so we clear the current task and show the inventory form
      console.log(text);
      this.setState({
        runningOCR: false,
        imageTask: null,
      });
      this.props.showForm(false, text);
    })
    .catch((error) => {
      if (error.isCanceled !== true) {
        // Task failed and wasn't cancelled
        alert("Error scanning image, please try again.");
        console.log(error);
      }
      // Task either failed or was cancelled - OCR is complete, clear current task 
      this.setState({
        runningOCR: false,
        imageTask: null,
      });
    });

    this.setState({
      runningOCR: true,
      imageTask: task,
    });
  }

  // Asynchronous function that returns the recognized text from the camera
  async scanImage() {
    const { webcamRef, worker, workerLoaded } = this.state;

    if (!workerLoaded) {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      this.setState({
        workerLoaded: true,
      });
    }

    // Pre-process image using Jimp library to make it more black and white 
    // Tesseract doesn't work on Jimp objects so we get the processed image as a base64 string
    const image = await Jimp.read(webcamRef.getScreenshot());
    const image_processed = await image.greyscale().contrast(+0.7).normalize().getBase64Async(Jimp.MIME_PNG);
    const { data: { text } } = await worker.recognize(image_processed);
    return text;
  }

  // Cancel the image task when the cancel button is pressed in the popup
  cancelImageTask() {
    const { imageTask } = this.state;

    if (imageTask !== null) {
      imageTask.cancel();
    }

    this.setState({
      runningOCR: false,
      imageTask: null,
    });
  }

  // If user skips scanning or navigates away, cancel any image scanning task present
  componentWillUnmount() {
    const { imageTask } = this.state;
    if (imageTask !== null) {
      imageTask.cancel();
    }
  }

  // Button for manual supply entry 
  handleEditClick() {
    this.props.showForm(true, "");
  }

  render() {
    const { runningOCR } = this.state;

    return (
      <div>
        {(runningOCR) ? 
          <div className="popup">
            <div className="bg-white paragraph p-md rounded-xl">
              <h2 className="text-3xl">
                Scanning, Please Wait...
              </h2>
              <div className="flex justify-evenly mt-md">
                <button
                  className="m-sm pill_button w-1/3"
                  onClick={this.cancelImageTask}
                >
                  Cancel
                </button>
                <button
                  className="m-sm pill_button w-1/3"
                  onClick={this.handleEditClick}
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
          :
          null
        }
        <Webcam
          audio={false}
          className="h-screen object-cover landscape:w-screen"
          screenshotFormat="image/png"
          ref={this.setRef}
        />
        <div className="flex justify-center">
          <button 
            className="absolute bottom-nav far fa-circle text-white text-8xl focus:outline-none active:text-indigo-300"
            onClick={this.handleCameraClick}
            disabled={runningOCR}
          />
        </div>
        <div className="flex z-1">
          <button 
            className="absolute top-0 right-0 p-lg far fa-edit text-white text-6xl focus:outline-none active:text-indigo-300"
            onClick={this.handleEditClick}
            disabled={runningOCR}
          />
        </div>
      </div>
    );
  }
}

 export default CameraFeed;