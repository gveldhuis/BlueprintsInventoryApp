import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';
import { getSupplies } from 'utils/api_utils';
import {
  Formik,
  Form, 
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

class SupplyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supplyData: [],
    };
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.rescanSupply = this.rescanSupply.bind(this);
    this.searchForSupply = this.searchForSupply.bind(this);
    this.registerNewSupply = this.registerNewSupply.bind(this);
  }

  componentDidMount() {
    const { auth, supplySearchText } = this.props;
    getSupplies(auth.userid, auth.eventPassword, supplySearchText)
    .then((data) => {
      this.setState({
        supplyData: data,
      });
    })
    .catch((error) => {
      alert("Error searching supplies, please try again.");
      console.log(error);
    });
  }

  handleListItemClick(index) {
    const { supplyData } = this.state;

    this.props.setSupplyItem(supplyData[index]);
    this.props.setFormPage(FORM_PAGES.INVENTORY_FORM);
  }

  handleSubmit(values) {
    const { supplyData } = this.state;

    this.props.setSupplyItem(supplyData[values.selectedItem]);
    this.props.setFormPage(FORM_PAGES.INVENTORY_FORM);
  }
  
  rescanSupply() {
    this.props.showCamera();
  } 

  searchForSupply() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_SEARCH);
  }

  registerNewSupply() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_FORM);
  }

  render() {
    const { supplyData } = this.state;

    const listItems = supplyData.map((supplyData, index) => (
      <label
        key={supplyData[1].id}
        className="flex justify-center bg-white odd:bg-gray-100 border-b border-gray-300"
      >
        <div className="flex items-center justify-center w-lg border-r border-gray-300">
          <div>
            <p className="text-center my-sm">{index + 1}</p>
            <input
              type="radio"
              name="selectedItem"
              value={index}/>
          </div>
        </div>
        <div
          className="w-full overflow-x-scroll"
        >
          <div className="w-full whitespace-no-wrap">
            <p className="inline-block w-1/6 text-right">Ref #:</p>
            <p className="inline-block w-5/6 text-left mx-md">{supplyData[1].ref_number}</p>
          </div>
          <div className="w-full whitespace-no-wrap">
            <p className="inline-block w-1/6 text-right">Name:</p>
            <p className="inline-block w-5/6 text-left mx-md">{supplyData[1].name}</p>
          </div>
          <div className="w-full whitespace-no-wrap">
            <p className="inline-block w-1/6 text-right">Brand:</p>
            <p className="inline-block w-5/6  text-left mx-md">{supplyData[1].brand}</p>
          </div>
        </div>
      </label>
    ));

    return (
      <div className="form_screen">
        <div className="form_card h-3/4">

          <div className="flex justify-center items-center my-md">
            <h1 className="page_header text-4xl font-semibold px-sm">
              Select Item Type
            </h1>
          </div>

          <Formik
            initialValues={{
              selectedItem: '',
            }}
            validationSchema={Yup.object({
              selectedItem: Yup.number().required('Please select an item type from the list.'),
            })}
            onSubmit={(values) => {
              this.handleSubmit(values);
            }}
          >
            <Form className="h-4/5">
              <Field component="div" className="h-7/10 overflow-y-scroll mx-sm shadow border border-gray-400">
                {listItems}
              </Field>

              <div className="text-red-600 font-normal italic w-full h-md flex justify-center py-sm">
                <ErrorMessage name="selectedItem"/>
              </div>

              <div className="flex flex-wrap justify-center pt-md">
                <div className="flex flex-wrap justify-evenly w-full">
                  <button onClick={this.registerNewSupply} type="button" className="pill_button w-2/5 my-sm">
                    New Supply
                  </button>

                  <button type="submit" className="pill_button bg-light_blue w-2/5 my-sm">
                    Next <p className="fas fa-arrow-right"/>
                  </button>
                </div>

                <div className="flex flex-wrap justify-evenly w-full">
                  <button onClick={this.searchForSupply} type="button" className="pill_button w-2/5 my-sm">
                    Manual Search
                  </button>

                  <button onClick={this.rescanSupply} type="button" className="pill_button w-2/5 my-sm">
                    Re-Scan Item
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

export default SupplyList;
