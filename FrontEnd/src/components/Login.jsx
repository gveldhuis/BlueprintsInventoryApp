import React from 'react';
import Authentication from 'utils/Auth';

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
            <div className="h-screen">
              <div className="flex justify-center items-end h-2/5">
                <img
                  src={require('assets/images/Blueprints_Logo2.png')} 
                  alt = "Logo"
                  className="w-10/12 max-w-xs object-contain"
                />
              </div>
              
              <div className="flex justify-center items-center py-sm">
                <h1 className="section_header font-semibold text-dark_blue">Log In</h1>
              </div>

              <div className="flex justify-center items-start h-2/5">
                
                <form 
                  onSubmit={(event) => this.handleSubmit(event, auth.setLogin)} 
                  className="w-11/12"
                >
                  <div className="flex items-center my-sm whitespace-no-wrap">
                    <div className="w-1/3">
                      <label className="block text-right mx-md">
                        First Name
                      </label>
                    </div>
                    <div className="w-2/3">
                      <input 
                        name="firstname"
                        type="text" 
                        value={this.state.firstname} 
                        onChange={this.handleChange} 
                        placeholder="First"
                        className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                      />
                    </div>
                  </div>

                  <div className="flex items-center my-sm whitespace-no-wrap">
                    <div className="w-1/3">
                      <label className="block text-right mx-md">
                        Last Name
                      </label>
                    </div>
                    <div className="w-2/3">
                      <input 
                        name = "lastname"
                        type="text" 
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        placeholder="Last"
                        className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"  
                      />
                    </div>
                  </div>

                  <div className="flex items-center my-sm whitespace-no-wrap">
                    <div className="w-1/3">
                      <label className="block text-right mx-md">
                        Email
                      </label>
                    </div>
                    <div className="w-2/3">
                      <input 
                        name = "email"
                        type = "text"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="email@domain"
                        className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                      />
                    </div>
                  </div>

                  <div className="flex items-center my-sm whitespace-no-wrap">
                    <div className="w-1/3">
                      <label className="block text-right mx-md">
                        Event Token
                      </label>
                    </div>
                    <div className="w-2/3">
                      <input 
                        name = "eventpass"
                        type = "text"
                        value={this.state.eventpass}
                        onChange={this.handleChange}
                        placeholder="sdkfa2938"
                        className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center pt-md">
                    <input
                      type="submit"
                      value="Login"
                      className="pill_button w-full"
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </Authentication.Consumer>
    );
  }
}

export default Login;
