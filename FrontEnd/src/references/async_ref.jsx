import React from 'react';

class AsyncRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waitingForData: true,
      data: {},
    };
  }

  // This is like a fetch to one of our REST API endpoints - it performs some
  // operation and returns some data (contained in a promise) after a long time.
  // A Promise is basically a placeholder for data that will be there in the
  // future - you can specify what to do when the data arrives using .then() on
  // the Promise, or using async/await syntax - we end up using both in this reference
  api() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('{"x":5,"y":6}'), 2000);
    })
  }

  // This is like an api_util function - it wraps around the api call and
  // waits for the data (using await), transforms it into a json object (which
  // we also need to wait for), and returns that object. The await keyword
  // pauses the function execution until the Promise returns, and if you use
  // await in a function, you need to specify it as an async function 
  async callAPI() {
    const response = await this.api();
    const data = await JSON.parse(response);
    return data;
  }

  // If you have to retrieve data when creating a React component, you should
  // do it in componentDidMount() - this is the function that runs after the
  // React component has been mounted on the DOM tree and has been rendered once
  componentDidMount() {
    // We execute callAPI which will run asynchronously and return a Promise which
    // will eventually contain a value - we use .then(func) on the Promise to
    // call func when the Promise contains a value, in this case to setState
    this.callAPI()
    .then((data) => {
      this.setState({
        data: data,
        waitingForData: false,
      })
    })
  }

  render() {
    const { data, waitingForData } = this.state;

    // Depending on if we've received the data or not, we render a loading message
    // or the actual data - in this case, we'll render Loading... for 2 seconds
    // until we get the data at which point setState gets called and we re-render
    let text;
    if (waitingForData) {
      text = <p>Loading...</p>;
    } else {
      text = <div>
        <p>x: {data.x}</p>
        <p>y: {data.y}</p>
      </div>;
    }

    return (
      <div>
        {text}
      </div>
    );
  }
}

export default AsyncRef;