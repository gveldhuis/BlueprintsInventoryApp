import React from 'react';

// This is like a fetch to one of our REST API endpoints - it performs some
// operation and returns some data (contained in a promise) after a long time.
// A Promise is basically a placeholder for data that will be there in the
// future - you can specify what to do when the data arrives using .then() on
// the Promise, or using async/await syntax - we end up using both in this reference
function loginAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('{"username":"atlas","email":"digital@umich.edu"}'), 2000);
  });
}

// This is like an api_util function - it wraps around the api call and
// waits for the data (using await), transforms it into a json object (which
// we also need to wait for), and returns that object. The await keyword
// pauses the function execution until the Promise returns, and if you use
// await in a function, you need to specify it as an async function 
async function callLoginAPI() {
  const response = await loginAPI();
  const data = await JSON.parse(response);
  return data;
}


// This class just handles choosing which Page to render
class LoadingRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      username: "",
      email: "",
    };
    this.setLoginPage = this.setLoginPage.bind(this);
    this.setHomePage = this.setHomePage.bind(this);
  }

  setLoginPage() {
    this.setState({
      showLogin: true,
    });
  }

  setHomePage(username, email) {
    this.setState({
      showLogin: false,
      username: username,
      email: email,
    });
  }

  render() {
    const { showLogin, username, email } = this.state;
    if (showLogin) {
      return <LoginPage setHomePage={this.setHomePage}/>;
    } else {
      return <HomePage setLoginPage={this.setLoginPage} username={username} email={email}/>;
    }
  }
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // As soon as the button as pressed, we set the state to loading - we use loading
    // to disable the button and render some text to prevent the user from making
    // a bunch of API calls and to show them something is happening
    this.setState({
      loading: true,
    });

    // Then we make the async API call to "log" the user in - as soon as we get
    // the user's info back, we call the callback we've been passed to go to
    // the home page - by using .then(), we ensure we change pages only when the
    // async function call has succeeded. To make this example more robust, we
    // would also add a .catch() to handle any errors from the api call and a 
    // timeout so that we aren't frozen forever
    callLoginAPI()
    .then((data) => {
      this.props.setHomePage(data.username, data.email);
    });
  }

  render() {
    // We use loading to disable the button after we click it and to display 
    // the loading message
    const { loading } = this.state;
    return (
      <div>
        <button class="bg-grey p-sm" onClick={this.handleClick} disabled={loading}>Login</button>
        {(loading) ? <p>Logging in, please wait...</p> : null}
      </div>
    );
  }
}

// This component doesn't do anything special
class HomePage extends React.Component {
  render() {
    const {username, email} = this.props;
    return (
      <div>
        <p>Welcome {username}! Your email is {email} if you wanted to know</p>
        <button class="bg-grey p-sm" onClick={this.props.setLoginPage}>Logout</button>
      </div>
    )
  }
}

export default LoadingRef;