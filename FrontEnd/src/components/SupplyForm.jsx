import React from 'react';
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
      <div>
        <h1>Supply Form</h1>
        <button onClick={this.cancel}>Cancel</button>
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default SupplyForm;