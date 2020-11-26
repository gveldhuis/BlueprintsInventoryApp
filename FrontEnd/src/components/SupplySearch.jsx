import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';
import { 
  Formik,
  Form, 
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

class SupplySearch extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  back() {
    console.log(this.props.showCamera);
    this.props.showCamera();
  }

  handleSubmit(values) {
    this.props.setSupplySearchText(values.supplyName);
    this.props.setFormPage(FORM_PAGES.SUPPLY_LIST);
  } 

  render() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <div className="h-3/4 w-3/4 bg-white mb-xl">
          <div className="flex h-1/4 justify-center items-center">
            <h1 className="page_header text-4xl font-semibold">
              Search for a Supply
            </h1>
          </div>
          <Formik
            initialValues={{
              supplyName: '',
            }}
            validationSchema={Yup.object({
              supplyName: Yup.string().required('Required'),
            })}
            onSubmit={(values) => {
              this.handleSubmit(values);
            }}
            className="h-3/4"
          >
            <Form>
              <div className="w-full">
                <div className="flex justify-center items-center my-sm">
                  <div className="w-2/3">
                    <Field 
                      name="supplyName"
                      as="textarea"
                      rows="4"
                      placeholder="Supply label text"
                      className="resize-none bg-gray-200 text-start border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue"
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-md">
                  <div className="flex justify-evenly w-2/3">
                    <button onClick={this.back} type="button" className="pill_button w-1/3">
                      Back
                    </button>

                    <button type="submit" className="pill_button w-1/3">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default SupplySearch;