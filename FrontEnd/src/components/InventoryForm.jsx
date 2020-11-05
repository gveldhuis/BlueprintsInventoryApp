import React from 'react';
import { 
  Formik,
  Form, 
  Field,
  ErrorMessage,
} from 'formik';
import Authentication from 'utils/Auth';
import * as Yup from 'yup';
import FORM_PAGES from 'utils/ScanFormPages';

class InventoryForm extends React.Component {
  /*
  Props:
  - setFormPage() callback function
  - supplyItem dict containing
    {
      id:
      ref_number:
      brand:
      name:
      category:
    }

  State: None

  Functions:
  - back(): sets form page to SupplyList
  - handleSubmit(): submits form to REST API
  */
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }
  
  back() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_LIST);
  }

  handleSubmit(formValues) {
    // TODO: implement this eventually
  }

  /*
  TODO: Render a Formik form (see Login.jsx for reference) with the following fields:
        - Amount
        - Expiration Day
        - Expiration Month
        - Expiration Year
        Also render a header showing the selected SupplyItem and a back button beneath the form 
  */
  render() {
    return(
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
                <h1 className="section_header font-semibold text-dark_blue">Inventory Form</h1>
              </div>

              <div className="flex justify-center items-start h-2/5">
                <Formik
                  initialValues={{
                    amount: '',
                    expDay: '',
                    expMonth: '',
                    expYear: '',
                  }}
                  validationSchema={Yup.object({
                    amount: Yup.string().required('Required'),
                    expDay: Yup.string().required('Required'),
                    expMonth: Yup.string().required("Required"),
                    expYear: Yup.string().required("Required"),
                  })}
                  onSubmit={(values) => {
                    this.handleSubmit(values);
                  }}
                >
                  <Form className="w-11/12">
                    <div className="flex items-center my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="amount" className="block text-right mx-sm font-semibold">
                          Amount
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field 
                          name="amount"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                        <ErrorMessage name="amount"/>
                      </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="expDay" className="block text-right mx-sm font-semibold">
                          Expiration Day
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="expDay"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="expDay" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="expMonth" className="block text-right mx-sm font-semibold">
                          Expiration Month
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="expMonth"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="expMonth" />
                      </div>
                    </div>
                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="expYear" className="block text-right mx-sm font-semibold">
                          Expiration Year
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="expYear"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="expYear" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <button onSubmit={this.back} type="cancel" value="Cancel" className="pill_button w-1/6">
                        Cancel
                      </button>
                      <button type="submit" value="Submit" className="pill_button w-1/6">
                        Submit
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
export default InventoryForm;