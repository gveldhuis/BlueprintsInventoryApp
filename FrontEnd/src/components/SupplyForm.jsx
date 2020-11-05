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

class SupplyForm extends React.Component {
  /*
  Props:
  - setFormPage() callback function
  - setSupplyFormData() callback function 

  State: None

  Functons:
  - cancel(): Sets page to SupplyList
  - handleSubmit(): calls setSupplyItem() and sets page to InventoryForm
  */

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleSubmit(formValues) {
    this.props.setFormPage(FORM_PAGES.INVENTORY_FORM);
  }
  
  cancel() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_LIST);
  }

  /*
  TODO: Render a Formik form (see Login.jsx for reference) with the following fields:
        - Supply Name
        - Brand
        - Reference Number
        Also render a cancel button
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
                <h1 className="section_header font-semibold text-dark_blue">Supply Form</h1>
              </div>

              <div className="flex justify-center items-start h-2/5">
                <Formik
                  initialValues={{
                    supplyName: '',
                    brand: '',
                    refNumber: '',
                  }}
                  validationSchema={Yup.object({
                    supplyName: Yup.string().required('Required'),
                    brand: Yup.string().required('Required'),
                    refNumber: Yup.string().required("Required"),
                  })}
                  onSubmit={(values) => {
                    this.handleSubmit(auth.setLogin, values);
                  }}
                >
                  <Form className="w-11/12">
                    <div className="flex items-center my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="supplyName" className="block text-right mx-sm font-semibold">
                          Supply Name
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field 
                          name="supplyName"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                        <ErrorMessage name="supplyName"/>
                      </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="brand" className="block text-right mx-sm font-semibold">
                          Brand
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="brand"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="brand" />
                        </div>
                    </div>

                    <div className="flex items-center  my-sm">
                      <div className="w-1/3 whitespace-no-wrap">
                        <label htmlFor="refNumber" className="block text-right mx-sm font-semibold">
                          Reference Number
                        </label>
                      </div>
                      <div className="w-1/2">
                        <Field
                          name="refNumber"
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                        />
                      </div>
                      <div className="w-1/6 text-red-600 font-normal italic mx-sm">
                          <ErrorMessage name="refNumber" />
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button type="submit" value="Submit" className="pill_button w-1/6">
                        Submit
                      </button>
                      <button type="cancel" value="Cancel" className="pill_button w-1/6">
                        Cancel
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

export default SupplyForm;