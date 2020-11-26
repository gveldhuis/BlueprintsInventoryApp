import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';
import SupplySearch from './SupplySearch';
import SupplyList from './SupplyList';
import SupplyForm from './SupplyForm';
import InventoryForm from './InventoryForm';

class ScanForm extends React.Component {
  constructor(props) {
    super(props);
    const { manualEntry, imageText } = this.props;
    this.state = {
      currentPage: (true) ? FORM_PAGES.SUPPLY_SEARCH : FORM_PAGES.SUPPLY_LIST,
      supplySearchText: imageText,
      supplyItem: {
        id: 0,
        ref_number: "",
        brand: "",
        name: "",
        category: "",
      },
    };
    this.setFormPage = this.setFormPage.bind(this);
    this.setSupplySearchText = this.setSupplySearchText.bind(this);
  }

  setFormPage(page) {
    this.setState({
      currentPage: page,
    });
  }

  setSupplySearchText(text) {
    this.setState({
      supplySearchText: text,
    });
  }

  render() {
    const { currentPage, supplySearchText } = this.state;
    console.log(this.props.showCamera);

    let page;
    switch(currentPage) {
      case FORM_PAGES.SUPPLY_SEARCH:
        page = <SupplySearch
          setFormPage={this.setFormPage}
          setSupplySearchText={this.setSupplySearchText}
          showCamera={this.props.showCamera}
        />
        break;

      case FORM_PAGES.SUPPLY_LIST:
        page = <SupplyList setFormPage={this.setFormPage} supplySearchText={supplySearchText} />;
        break;
      
      case FORM_PAGES.SUPPLY_FORM:
        page = <SupplyForm setFormPage={this.setFormPage} />;
        break;
      
      case FORM_PAGES.INVENTORY_FORM:
        page = <InventoryForm setFormPage={this.setFormPage} />;
        break;

      default:
        page = <SupplySearch
          setFormPage={this.setFormPage}
          setSupplySearchText={this.setSupplySearchText}
          showCamera={this.props.showCamera}
        />
        break;
    }

    return page;
  }
}

export default ScanForm;