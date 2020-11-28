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
import { registerSupply } from 'utils/api_utils';

class SupplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false, 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleSubmit(formValues) {
    const { auth } = this.props;
    this.setState({
      submitting: true
    });
    registerSupply(auth.userid, auth.eventPassword, formValues.supplyName, formValues.brand, formValues.refNumber)
    .then((id) => {
      this.props.setSupplyItem(
        [
          0,
          {
            id: id,
            ref_number: formValues.refNumber,
            brand: formValues.brand,
            name: formValues.supplyName,
            category: '',
          }
        ]
      );
      // Set so registered item appears at top of list when navigating back to SupplyList
      this.props.setSupplySearchText(formValues.supplyName);
      this.props.setFormPage(FORM_PAGES.INVENTORY_FORM);
    })
    .catch((error) => {
      alert("Error registering new supply, please try again.");
      console.log(error);
    });
  }
  
  cancel() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_LIST);
  }

  render() {
    const { submitting } = this.state;
    return(
      <div className="flex justify-center items-start h-screen bg-gray-200">
        <div className="w-10/12 bg-white shadow rounded my-xl">
        
          <div className="flex justify-center items-center my-md">
            <h1 className="page_header text-4xl font-semibold px-sm">
              Register New Supply Item
            </h1>
          </div>
          <Formik
            initialValues={{
              supplyName: '',
              brand: '',
              refNumber: '',
            }}
            validationSchema={Yup.object({
              supplyName: Yup.string().required('*'),
              brand: Yup.string().required('*'),
              refNumber: Yup.string().required('*'),
            })}
            onSubmit={(values) => {
              this.handleSubmit(values);
            }}
          >
            <Form className="my-md">
              <div className="flex items-center my-sm">
                <div className="w-1/4 whitespace-no-wrap">
                  <label htmlFor="supplyName" className="block text-right mx-sm font-semibold">
                    Name
                  </label>
                </div>
                <div className="w-7/10 px-sm">
                  <Field 
                    name="supplyName"
                    type="text"
                    className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                  />
                </div>
                <div className="text-red-600 font-normal italic">
                  <ErrorMessage name="supplyName"/>
                </div>
              </div>

              <div className="flex items-center my-sm">
                <div className="w-1/4 whitespace-no-wrap">
                  <label htmlFor="brand" className="block text-right mx-sm font-semibold">
                    Brand
                  </label>
                </div>
                <div className="w-7/10 px-sm">
                  <Field
                    name="brand"
                    type="text"
                    className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                  />
                </div>
                <div className="text-red-600 font-normal italic">
                  <ErrorMessage name="brand" />
                </div>
              </div>

              <div className="flex items-center my-sm">
                <div className="w-1/4 whitespace-no-wrap">
                  <label htmlFor="refNumber" className="block text-right mx-sm font-semibold">
                    Ref #
                  </label>
                </div>
                <div className="w-7/10 px-sm">
                  <Field
                    name="refNumber"
                    type="text"
                    className="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                  />
                </div>
                <div className="text-red-600 font-normal italic">
                  <ErrorMessage name="refNumber" />
                </div>
              </div>
              
              <div className="flex justify-center my-md">
                <div className="flex justify-evenly w-full">
                  <button onClick={this.cancel} type="button" className="pill_button">
                    Cancel
                  </button>

                  <button disabled={submitting} type="submit" className="pill_button">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default SupplyForm;