import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';

class SupplyList extends React.Component {
  /*
  Props:
  - setCamera() callback function
  - setFormPage() callback function
  - setSupplyItem(supplyDict) callback function
  - list of supply dicts with:
    {
      id:
      ref_number:
      brand:
      name:
      category:
    }

  State: None

  Functions:
  - handleClick(index): setSupplyItem to supply in props.supplyList at index and setFormPage
       to progress form to InventoryForm - will be attached to each element in list
  - back(): call setCamera to return to camera
  - registerNewSupply(): setFormPage to go to Supplyform
  */

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.registerNewSupply = this.registerNewSupply.bind(this);
  }

  handleClick(index) {
    // TODO: call setSupplyItem(index);
    if (this.props.supplyList != null) {
      this.props.setSupplyItem(this.props.supplyList[index]);
      this.props.setFormPage(FORM_PAGES.INVENTORY_FORM);
    }
  }
  
  back() {
    this.props.setCamera();
  }

  registerNewSupply() {
    this.props.setFormPage(FORM_PAGES.SUPPLY_FORM);
  }

  /*
  TODO: Render a list of buttons for each supply in the supplyList - attach an onClick
        function to each button that calls handleClick() with the appropriate index.
        Beneath the list, render a back button and a registerNewSupply button.
  */
  render() {

    const list = this.props.supplyList.map((item, index) =>
  <li><button onClick={this.handleClick(index)}>{item.brand} {item.name} {item.ref_number}</button></li>
    );

    return(
      <div>
        <h1>Supply List</h1>
        <ul>{list}</ul>
        <button onClick={this.registerNewSupply}>Register New Supply</button>
        <button onClick={this.next}>Next</button>
        <button onClick={this.back}>Back</button>
      </div>
    );
  }
}

export default SupplyList;