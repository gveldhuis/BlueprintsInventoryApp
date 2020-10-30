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

  handleSubmit(login) {
    login("test_userid", "test_eventToken");
  }

  render() {
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
                    email: Yup.string().email("Invalid email address").required("Required"),
                    eventName: Yup.string().required("Required,"),
                    orgName: Yup.string().required("Required,"),
                    eventPassword: Yup.string().required("Required"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    this.handleSubmit(values.first)
                  }}
                >
                  <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />

                    <label htmlFor="email">Email</label>
                    <Field name="email" type="text" />
                    <ErrorMessage name="email" />

                    <label htmlFor="eventName">Event Name</label>
                    <Field name="eventName" type="select" />
                    <ErrorMessage name="eventName" />

                    <label htmlFor="orgName">Organization</label>
                    <Field name="orgName" type="select" />
                    <ErrorMessage name="orgName" />

                    <label htmlFor="eventPassword">Password</label>
                    <Field name="eventPassword" type="text" />
                    <ErrorMessage name="eventPassword" />

                    <button type="submit" value="Login">Log In</button>
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
