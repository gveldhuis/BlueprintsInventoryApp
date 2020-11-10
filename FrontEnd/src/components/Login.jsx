import React from 'react';
import { 
  Formik,
  Form, 
  Field,
  ErrorMessage,
} from 'formik';
import Authentication from 'utils/Auth';
import * as Yup from 'yup';
import { getEvents } from 'utils/api_utils';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstname: '', 
      lastname: '',
      email: '',
      eventpass: '',
      org: '',
      event:'',
      events: {},
      waitingForEvents: true};
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

  // handleSubmit is passed the login callback from inside render because we
  // only have access to the login callback from within Authentication.Consumer 
  handleSubmit(login, formValues) {
    login("test_userid", "test_eventToken");
  }

  // If you have to retrieve data when creating a React component, you should
  // do it in componentDidMount() - this is the function that runs after the
  // React component has been mounted on the DOM tree and has been rendered once
  componentDidMount() {
    // We execute getEvents() which will run asynchronously and return a Promise which
    // will eventually contain a value - we use .then(func) on the Promise to
    // call func when the Promise contains a value, in this case to setState
    getEvents()
    .then((data) => {
      this.setState({
        events: data,
        waitingForEvents: false,
      })
    })
  }

  render() {
    
    let text;
    if (waitingForEvents) {
      text = <p>Loading...</p>;
    } else {
      
    }
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
                         <Field as="select" name="event">
                          <option>{events.name}</option>
                        </Field>
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
            </div>
          )}
        </Authentication.Consumer>
    );
  }
}

export default Login;