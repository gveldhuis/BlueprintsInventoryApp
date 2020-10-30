import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';

class SupplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  next() {
    this.props.setFormPage(FORM_PAGES.INVENTORY_FORM);
  }
  
  cancel() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_LIST);
  }

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