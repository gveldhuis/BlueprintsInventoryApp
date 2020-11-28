import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <ul className="bottom_nav fixed bottom-0"> 
          <li><NavLink activeClassName="active_link" className="text-light_blue font-bold no-underline py-md px-lg flex text-5xl" to="/stats"><i className="fas fa-chart-line"></i></NavLink></li>
          <li><NavLink activeClassName="active_link" className="text-light_blue font-bold no-underline py-md px-lg flex text-5xl" to="/scan"><i className="fas fa-camera"></i></NavLink></li>
          <li><NavLink activeClassName="active_link" className="text-light_blue font-bold no-underline py-md px-lg flex text-5xl" to="/help"><i className="fas fa-question-circle"></i></NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;