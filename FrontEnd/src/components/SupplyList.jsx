import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';

class SupplyList extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.registerNewSupply = this.registerNewSupply.bind(this);
  }

  next() {
    this.props.setFormPage(FORM_PAGES.INVENTORY_FORM);
  }
  
  registerNewSupply() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_FORM);
  }

  render() {
    return(
      <div>
        <h1>Supply List</h1>
        <button onClick={this.registerNewSupply}>Register New Supply</button>
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default SupplyList;