import React from 'react';
import Authentication from '../utils/Auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstname: '', 
      lastname: '',
      email: '',
      eventpass: '',
      org: '',
      event:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
  	const value = target.value
  	const name = target.name
  	this.setState(
  		{[name]: value}
  	)
  }

  handleSubmit(event, login) {
    event.preventDefault();
    login("test_userid", "test_eventToken");
  }

  render() {
    //const { value } = this.state;
    return (
        <Authentication.Consumer>
          {(auth) => (
            <form onSubmit={(event) => this.handleSubmit(event, auth.setLogin)}>
            <img src={require('./Login/logo192.png')} alt = "Logo" />
              <label>
            First Name:
            <input 
              name="firstname"
              type="text" 
              value={this.state.firstname} 
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input 
              name = "lastname"
              type="text" 
              value={this.state.lastname}
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Email:
            <input 
              name = "email"
              type = "text"
              value={this.state.email}
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Event Password:
            <input 
              name = "eventpass"
              type = "text"
              value={this.state.eventpass}
              onChange={this.handleChange}/>
          </label>
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
