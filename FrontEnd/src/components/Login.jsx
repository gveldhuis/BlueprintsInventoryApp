import React from 'react';
import { 
  Formik,
  Form, 
  Field,
  ErrorMessage,
} from 'formik';
import Authentication from 'utils/Auth';
import * as Yup from 'yup';
import { getEvents, getOrganizations, registerVolunteer } from 'utils/api_utils';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      orgs: [],
      waitingForEvents: true,
      eventSelected: false,
      waitingForOrgs: true,
      loggingIn: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEventSelected(eventID) {
    getOrganizations(eventID)
    .then((data) => {
      this.setState({
        orgs: data,
        eventSelected: true,
        waitingForOrgs: false
      });
    })
    .catch((error) => {
      alert("Failed to retrieve organizations for selected event.");
      console.log(error.message);
    });
  }

  // handleSubmit is passed the login callback from inside render because we
  // only have access to the login callback from within Authentication.Consumer 
  handleSubmit(login, formValues) {
    this.setState({
      loggingIn: true,
    });
    registerVolunteer(
      formValues.eventID,
      formValues.eventPassword,
      formValues.orgID,
      formValues.firstName,
      formValues.lastName,
      formValues.email)
    .then((data) => {
      login(data, formValues.eventPassword);
    })
    .catch((error) => {
      alert("Login failed. Please try again.");
      console.log(error.message);
      this.setState({
        loggingIn: false,
      });
    });
  }

  componentDidMount() {
    getEvents()
    .then((data) => {
      this.setState({
        events: data,
        waitingForEvents: false
      })
    })
    .catch((error) => {
      alert("Failed to retrieve events. Please reload page.");
      console.log(error.message);
    });
  } 

  render() {
    const { events, orgs, waitingForEvents, eventSelected, waitingForOrgs, loggingIn } = this.state;
    
    const eventDropdownItems = events.map((eventData) => (
      <option key={eventData[0]} value={eventData[0]}>{eventData[1]}</option>
    ));
    
    const orgDropdownItems = orgs.map((orgData) => (
      <option key={orgData[0]} value={orgData[0]}>{orgData[1]}</option>
    ));

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
                  enableReinitialize={false}
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    eventID: '',
                    orgID: '',
                    eventPassword: '',
                  }}
                  validationSchema={Yup.object({
                    firstName: Yup.string().required('*'),
                    lastName: Yup.string().required('*'),
                    email: Yup.string().email("*").required("*"),
                    eventID: Yup.number().required("*"),
                    orgID: Yup.number().required("*"),
                    eventPassword: Yup.string().required("*"),
                  })}
                  onSubmit={(values) => {
                    this.handleSubmit(auth.setLogin, values);
                  }}
                >
                  {formProps => (<Form className="w-11/12">
                    <div className="flex items-center my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="firstName" className="block text-right mx-sm font-semibold">
                          First Name
                        </label>
                      </div>
                      <div className="w-7/12">
                        <Field 
                          name="firstName"
                          type="text"
                          className="form_field"
                        />
                      </div>
                      <div className="text-red-600 font-normal italic mx-sm">
                        <ErrorMessage name="firstName"/>
                      </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="lastName" className="block text-right mx-sm font-semibold">
                          Last Name
                        </label>
                      </div>
                      <div className="w-7/12">
                        <Field
                          name="lastName"
                          type="text"
                          className="form_field"
                        />
                      </div>
                      <div className="text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="lastName" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="email" className="block text-right mx-sm font-semibold">
                          Email
                        </label>
                      </div>
                      <div className="w-7/12">
                        <Field
                          name="email"
                          type="text"
                          className="form_field"
                        />
                      </div>
                      <div className="text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="email" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="eventID" className="block text-right mx-sm font-semibold">
                          Event Name
                        </label>
                      </div>
                      <div className="w-7/12">
                        <Field
                          name="eventID"
                          as="select"
                          disabled={waitingForEvents}
                          value={formProps.values.eventID}
                          onChange={(field) => {
                            formProps.setFieldValue('eventID', field.target.value);
                            this.handleEventSelected(field.target.value);
                          }}
                          className="form_field"
                        >
                          <option value=""></option>
                          {eventDropdownItems}
                        </Field>
                      </div>
                      <div className="text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="eventID" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="orgID" className="block text-right mx-sm font-semibold">
                          Organization
                        </label>
                      </div>
                      <div className="w-7/12">
                        <Field
                          name="orgID"
                          as="select"
                          disabled={waitingForOrgs}
                          className="form_field"
                        >
                          <option value="">{eventSelected ? "" : " Please Select Event"}</option>
                          {orgDropdownItems}
                        </Field>
                      </div>
                      <div className="text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="orgID" />
                        </div>
                    </div>

                    <div className="flex items-center my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="eventPassword" className="block text-right mx-sm font-semibold">
                          Password
                        </label>
                      </div>
                      <div className="w-7/12">
                        <Field
                          name="eventPassword"
                          type="password"
                          className="form_field"
                        />
                      </div>
                      <div className="text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="eventPassword" />
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button type="submit" value="Login" className="pill_button w-1/4" disabled={loggingIn}>
                        Log In
                      </button>
                    </div>
                  </Form>)}
                </Formik>
              </div>
            </div>
          )}
        </Authentication.Consumer>
    );
  }
}

export default Login;