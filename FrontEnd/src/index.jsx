import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SupplyForm from './components/SupplyForm'
import InventoryForm from './components/InventoryForm'
import './assets/styles/main.css'

ReactDOM.render(
  // <App />,
  <SupplyForm />,
  // <InventoryForm />,
  document.getElementById('root'),
);
