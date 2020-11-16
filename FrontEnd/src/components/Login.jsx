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
    // TODO #1:
    // Given the eventID, call the getOrganizations API 
    // Set the returned data in state
    // Set eventSelected to true
    // Set waitingForOrgs to false
  }

  // handleSubmit is passed the login callback from inside render because we
  // only have access to the login callback from within Authentication.Consumer 
  handleSubmit(login, formValues) {
    // TODO #3: 
    // Set state.loggingIn to true
    // Call the register_user API with formValues
    // Call login() on the returned data from the API call
    login("test_userid", "test_event_password")
  }

  componentDidMount() {
    getEvents()
    .then((data) => {
      console.log(data);
      this.setState({
        events: data,
        waitingForEvents: false
      })
    });
  }

  render() {
    const { events, orgs, waitingForEvents, eventSelected, waitingForOrgs } = this.state;
    
    const eventDropdownItems = events.map((eventData) => (
      <option key={eventData[0]} value={eventData[0]}>{eventData[1]}</option>
    ));
    
    const orgDropdownItems = orgs.map((orgData) => (
      // TODO #2:
      // Fill this out similar to eventDropdownItems - note that orgData is going
      // to be a list of (orgID, orgName) pairs - we need the option's value to be
      // the ID because we need that when we submit the form
      <option></option>
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
                  // validationSchema={Yup.object({
                  //   firstName: Yup.string().required('Required'),
                  //   lastName: Yup.string().required('Required'),
                  //   email: Yup.string().email("Invalid email").required("Required"),
                  //   eventID: Yup.number().required("Required"),
                  //   orgID: Yup.number().required("Required"),
                  //   eventPassword: Yup.string().required("Required"),
                  // })}
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
                        <label htmlFor="eventID" className="block text-right mx-sm font-semibold">
                          Event Name
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="eventID"
                          as="select"
                          disabled={waitingForEvents}
                          value={formProps.values.eventID}
                          onChange={(field) => {
                            // To run a function when an event is selected, we need to
                            // override this Formik prop and manually set the field value
                            // before we handle the change
                            formProps.setFieldValue('eventID', field.target.value);
                            this.handleEventSelected(field.target.value);
                          }}
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        >
                          <option value=""></option>
                          {eventDropdownItems}
                        </Field>
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="eventID" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="orgID" className="block text-right mx-sm font-semibold">
                          Organization
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="orgID"
                          as="select"
                          disabled={waitingForOrgs}
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        >
                          <option value="">{eventSelected ? "" : " Please Select Event"}</option>
                          {orgDropdownItems}
                        </Field>
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="orgID" />
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
                      {/* TODO #3: Disable this when loggingIn = true */}
                      <button type="submit" value="Login" className="pill_button w-1/4">
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