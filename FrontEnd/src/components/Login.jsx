import React from 'react';
import Authentication from 'utils/Auth';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstname: '', 
      lastname: '',
      email: '',
      eventpass: '',
      org: [],
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
           <div class="w-full max-w-xs md:flex md:items-center">
            <form onSubmit={(event) => this.handleSubmit(event, auth.setLogin)}
              class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <img src={require('./Login/logo192.png')} alt = "Logo" />
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
            First Name:
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name"
              name="firstname"
              type="text" 
              value={this.state.firstname} 
              onChange={this.handleChange} />
          </label>
          </div>
          <br />
          <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
            Last Name:
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name"
              name = "lastname"
              type="text" 
              value={this.state.lastname}
              onChange={this.handleChange}/>
          </label>
          </div>
          <br />
          <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email:
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"
              name = "email"
              type = "text"
              value={this.state.email}
              onChange={this.handleChange}/>
          </label>
          </div>
          <br />
          <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="eventpass">
            Event Password:
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="********"
              name = "eventpass"
              type = "text"
              value={this.state.eventpass}
              onChange={this.handleChange}/>
          </label>
          </div>
          <br />
          <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="org">
            Organization:
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="********"
              value={this.state.org}
              onChange={this.handleChange}
              />
          </label>
          </div>
          <div class="md:flex md:items-center">
              <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                value="Login"
              />
          </div>

            </form>
            </div>
          )}
        </Authentication.Consumer>
    );
  }
}

export default Login;
