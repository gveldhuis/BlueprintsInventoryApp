import React from 'react';
import FORM_PAGES from 'utils/ScanFormPages';
import { getSupplies } from 'utils/api_utils';

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
      <li key={supplyData[1].id} className="flex justify-center bg-white odd:bg-gray-100 border-b-2 border-gray-600">
        <div className="flex items-center justify-center w-lg border-r-2 border-gray-600">
          <p>{index + 1}</p>
        </div>
        <button
          onClick={() => this.handleListItemClick(index)}
          className="w-full overflow-scroll"
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
        </button>
      </li>
    ));

    return(
      <div className="flex justify-center items-start h-screen bg-gray-200">
        <div className="w-10/12 bg-white my-xl h-3/4">

          <div className="flex justify-center items-center my-md">
            <h1 className="page_header text-4xl font-semibold px-sm">
              Select Item Type
            </h1>
          </div>

          <ol className="border-2 border-black h-3/5 overflow-scroll mx-sm">
            {listItems}
          </ol>

          <div className="flex justify-center pt-md">
            <div className="flex flex-wrap justify-evenly w-full">
              <button onClick={this.searchForSupply} type="button" className="pill_button my-sm">
                Manual Search
              </button>

              <button onClick={this.rescanSupply} type="button" className="pill_button my-sm">
                Re-Scan Item
              </button>

              <button onClick={this.registerNewSupply} type="button" className="pill_button my-sm">
                New Supply
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SupplyList;

// const supplyData = [
//   [
//     0,
//     {
//       id: 0,
//       ref_number: "abcab cabcabcab cabcabcabcabcabca bcabcabcabcab cabc",
//       brand: "MeijerMeije rMeijerMeijerMeij erMeijerMeijerMeijerMeije rMeijer",
//       name: "GlovesGl ovesGlovesGlovesG lovesGlovesGlo vesGlovesGloves Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 1,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 2,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 3,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 4,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 5,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 6,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 7,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 8,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
//   [
//     0,
//     {
//       id: 9,
//       ref_number: "abc",
//       brand: "Meijer",
//       name: "Gloves",
//       category: "misc",
//     }
//   ],
// ];