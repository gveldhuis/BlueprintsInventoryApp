import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';
import SupplyList from './SupplyList';
import SupplyForm from './SupplyForm';
import InventoryForm from './InventoryForm';

class ScanForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: FORM_PAGES.SUPPLY_LIST,
      supplyList: [],
      supplyItem: {
        id: 0,
        ref_number: "",
        brand: "",
        name: "",
        category: "",
      },
    };
    this.setFormPage = this.setFormPage.bind(this);
  }

  setFormPage(page) {
    this.setState({
      currentPage: page,
    });
  }

  // TODO: Go through sub-components and make sure the appropriate props/callback
  // exist and are being passed down

  render() {
    const { currentPage } = this.state;
    
    let page;
    switch(currentPage) {
      case FORM_PAGES.SUPPLY_LIST:
        page = <SupplyList setFormPage={this.setFormPage} />;
        break;
      
      case FORM_PAGES.SUPPLY_FORM:
        page = <SupplyForm setFormPage={this.setFormPage} />;
        break;
      
      case FORM_PAGES.INVENTORY_FORM:
        page = <InventoryForm setFormPage={this.setFormPage} />;
        break;

      default:
        page = <SupplyList setFormPage={this.setFormPage} />;
        break;
    }

    return page;
  }
}

export default ScanForm;