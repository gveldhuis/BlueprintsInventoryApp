import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';

class InventoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.cancel = this.cancel.bind(this);
  }
  
  cancel() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_LIST);
  }

  render() {
    return(
      <div>
        <h1>Inventory Form</h1>
        <button onClick={this.cancel}>Cancel</button>
      </div>
    );
  }
}

export default InventoryForm;