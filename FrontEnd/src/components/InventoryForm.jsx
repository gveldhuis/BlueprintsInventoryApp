import React from 'react';
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
      <div>
        <h1>Inventory Form</h1>
        <button onClick={this.back}>Back</button>
      </div>
    );
  }
}

export default InventoryForm;