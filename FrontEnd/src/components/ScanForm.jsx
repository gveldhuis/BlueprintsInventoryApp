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
      currentPage: (manualEntry) ? FORM_PAGES.SUPPLY_SEARCH : FORM_PAGES.SUPPLY_LIST,
      supplySearchText: imageText,
      manualEntry: manualEntry,
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
    this.setSupplyItem = this.setSupplyItem.bind(this);
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

  setSupplyItem(data) {
    this.setState({
      supplyItem: data,
    });
  }

  render() {
    const { currentPage, supplySearchText, supplyItem} = this.state;

    let page;
    switch(currentPage) {
      case FORM_PAGES.SUPPLY_SEARCH:
        page = <SupplySearch
          showCamera={this.props.showCamera}
          setFormPage={this.setFormPage}
          setSupplySearchText={this.setSupplySearchText}
        />
        break;

      case FORM_PAGES.SUPPLY_LIST:
        page = <SupplyList
          showCamera={this.props.showCamera}
          setFormPage={this.setFormPage}
          supplySearchText={supplySearchText}
          setSupplyItem={this.setSupplyItem}
          auth={this.props.auth}
        />;
        break;
      
      case FORM_PAGES.SUPPLY_FORM:
        page = <SupplyForm
          setFormPage={this.setFormPage}
          setSupplyItem={this.setSupplyItem}
          setSupplySearchText={this.setSupplySearchText}
          auth={this.props.auth}
        />;
        break;
      
      case FORM_PAGES.INVENTORY_FORM:
        page = <InventoryForm
          showCamera={this.props.showCamera}
          setFormPage={this.setFormPage}
          selectedSupply={supplyItem}
          auth={this.props.auth}
        />;
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