import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';
import { 
  Formik,
  Form, 
  Field,
} from 'formik';
import * as Yup from 'yup';

class SupplySearch extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  back() {
    this.props.showCamera();
  }

  handleSubmit(values) {
    this.props.setSupplySearchText(values.supplyName);
    this.props.setFormPage(FORM_PAGES.SUPPLY_LIST);
  } 

  render() {
    return (
      <div className="form_screen">
        <div className="form_card">
          
          <div className="flex justify-center items-center my-md">
            <h1 className="page_header text-4xl font-semibold px-sm">
              Search Supplies
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
          >
            <Form className="my-md">
              <div className="w-full">
                <div className="flex justify-center items-center my-sm">
                  <div className="w-5/6">
                    <Field 
                      name="supplyName"
                      as="textarea"
                      rows="4"
                      placeholder="Supply label text"
                      className="form_field resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-center my-md">
                  <div className="flex justify-evenly w-full">
                    <button onClick={this.back} type="button" className="pill_button">
                      Back
                    </button>

                    <button type="submit" className="pill_button">
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