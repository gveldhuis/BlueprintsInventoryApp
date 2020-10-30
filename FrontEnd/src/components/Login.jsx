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
<<<<<<< HEAD
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
            
              value={this.state.org}
              onChange={this.handleChange}
          </label>
          </div>
          <div class="md:flex md:items-center">
              <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                value="Login"
              />
          </div>

            </form>
=======
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
>>>>>>> 94110d2ababa00b23bb08d616a386f812d6f731b
            </div>
          )}
        </Authentication.Consumer>
    );
  }
}

export default Login;
