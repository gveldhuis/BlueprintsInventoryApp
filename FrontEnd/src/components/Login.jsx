import React from 'react';
import { 
  Formik,
  Form, 
  Field,
  ErrorMessage,
} from 'formik';
import Authentication from 'utils/Auth';
import * as Yup from 'yup';


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

<<<<<<< HEAD

  handleSubmit(event, login) {
    event.preventDefault();
=======
  // handleSubmit is passed the login callback from inside render because we
  // only have access to the login callback from within Authentication.Consumer 
  handleSubmit(login, formValues) {
>>>>>>> 5deb4b160bae30071bc5e9831f32100387f2c41a
    login("test_userid", "test_eventToken");
  }

  render() {
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
=======
            <div className="h-screen">
              <div className="flex justify-center items-end h-2/5">
                <img
                  src={require('assets/images/Blueprints_Logo2.png')} 
                  alt = "Logo"
                  className="w-10/12 max-w-xs object-contain"
                />
              </div>
              
              <div className="flex justify-center py-sm">
                <h1 className="section_header font-semibold text-dark_blue">Log In</h1>
              </div>

              <div className="flex justify-center items-start h-2/5">
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    eventName: '',
                    orgName: '',
                    eventPassword: '',
                  }}
                  validationSchema={Yup.object({
                    firstName: Yup.string().required('Required'),
                    lastName: Yup.string().required('Required'),
                    email: Yup.string().email("Invalid email").required("Required"),
                    eventName: Yup.string().required("Required"),
                    orgName: Yup.string().required("Required"),
                    eventPassword: Yup.string().required("Required"),
                  })}
                  onSubmit={(values) => {
                    this.handleSubmit(auth.setLogin, values);
                  }}
                >
                  <Form className="w-11/12">
                    <div className="flex items-center my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="firstName" className="block text-right mx-sm font-semibold">
                          First Name
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field 
                          name="firstName"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                        <ErrorMessage name="firstName"/>
                      </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="lastName" className="block text-right mx-sm font-semibold">
                          Last Name
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="lastName"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="lastName" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="email" className="block text-right mx-sm font-semibold">
                          Email
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="email"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="email" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="eventName" className="block text-right mx-sm font-semibold">
                          Event Name
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="eventName"
                          type="select"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="eventName" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="orgName" className="block text-right mx-sm font-semibold">
                          Organization
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="orgName"
                          type="select"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="orgName" />
                        </div>
                    </div>

                    <div className="flex items-center my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="eventPassword" className="block text-right mx-sm font-semibold">
                          Password
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="eventPassword"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="eventPassword" />
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button type="submit" value="Login" className="pill_button w-1/4">
                        Log In
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
>>>>>>> 5deb4b160bae30071bc5e9831f32100387f2c41a
            </div>
          )}
        </Authentication.Consumer>
    );
  }
}

export default Login;
