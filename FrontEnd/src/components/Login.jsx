import React from 'react';
import Authentication from '../utils/Auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event, login) {
    event.preventDefault();
    login("test_userid", "test_eventToken");
  }

  render() {
    const { value } = this.state;
    return (
      <Authentication.Consumer>
        {(auth) => (
          <form onSubmit={(event) => this.handleSubmit(event, auth.setLogin)}>
            <input 
              type="text"
              value={value}
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="submit"
              value="Login"
            />
          </form>
        )}
      </Authentication.Consumer>
    );
  }
}

export default Login;
