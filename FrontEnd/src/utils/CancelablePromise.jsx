// Helper function for creating promises that we can cancel
// In reality, this wraps the promise in another promise which resolves or rejects
// based on hasCanceled_ and returns a dictionary with that promise and a function
// to call to cancel the promise

// We need this so we can gracefully cancel image processing tasks and avoid calling
// callback functions on dismounted objects - for example, if a user presses the camera
// button to start the image processing task, then presses the skip button they'll
// be taken to the scan form page - if we didn't cancel the promise, once the task
// finishes it'll try to run a callback function provided by the Camera component, which
// has already been dismounted because the user skipped/navigated away
const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    );
    promise.catch((error) =>
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

export default makeCancelable;