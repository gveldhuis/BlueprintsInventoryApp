import React from 'react';
import { 
  Formik,
  Form, 
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import FORM_PAGES from 'utils/ScanFormPages';
import { registerInventory } from "utils/api_utils";

class InventoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      successfulSubmit: false,
    };
    this.cancel = this.cancel.bind(this);
  }

  cancel() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_LIST);
  }

  handleSubmit(formValues) {
    const { auth, selectedSupply } = this.props;
    const date = formValues.expDate.split("-");

    registerInventory(auth.userid, auth.eventPassword, selectedSupply[1].id, formValues.amount, date[0], date[1], date[2])
    .then(() => {
      this.setState({
        successfulSubmit: true,
      });
      setTimeout(() => this.props.showCamera(), 1000);
    })
    .catch((error) => {
      alert("Error logging inventory, please try again.");
      console.log(error);
    })
  }

  render() {
    const { submitting, successfulSubmit } = this.state;
    const { selectedSupply } = this.props;

    return (
      <div className="form_screen">
        {(successfulSubmit) ? 
          <div className="popup">
            <div className="bg-white p-md rounded-full">
              <p className="text-3xl"><i  className="text-green-500 fas fa-check"/> Success!</p>
            </div>
          </div>
          :
          null
        }

        <div className="form_card">
          
          <div className="flex justify-center items-center my-md">
            <h1 className="page_header text-4xl font-semibold px-sm">
              Item Info
            </h1>
          </div>

          <Formik
            initialValues={{
              supplyName: selectedSupply[1].name,
              amount: 0,
              expDate: '',
            }}
            validationSchema={Yup.object({
              supplyName: Yup.string().required('*'),
              amount: Yup.number().positive('*').required('*'),
              expDate: Yup.date().required('*'),
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
                    disabled={true}
                    className="form_field"
                  />
                </div>
              </div>

              <div className="flex items-center my-sm">
                <div className="w-1/4 whitespace-no-wrap">
                  <label htmlFor="amount" className="block text-right mx-sm font-semibold">
                    Amount
                  </label>
                </div>
                <div className="w-7/10 px-sm">
                  <Field
                    name="amount"
                    type="number"
                    className="form_field"
                  />
                </div>
                <div className="text-red-600 font-normal italic">
                  <ErrorMessage name="amount"/>
                </div>
              </div>

              <div className="flex items-center my-sm">
                <div className="w-1/4 whitespace-no-wrap">
                  <label htmlFor="expDate" className="block text-right mx-sm font-semibold">
                    Exp. Date
                  </label>
                </div>
                <div className="w-7/10 px-sm">
                  <Field
                    name="expDate"
                    type="date"
                    className="form_field"
                  />
                </div>
                <div className="text-red-600 font-normal italic">
                  <ErrorMessage name="expDate"/>
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
export default InventoryForm;