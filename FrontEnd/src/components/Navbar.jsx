import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul> 
          <li><NavLink exact to="/stats"><i className="fas fa-chart-line"></i></NavLink></li>
          <li><NavLink to="/camera"><i className="fas fa-camera"></i></NavLink></li>
          <li><NavLink to="/help"><i className="fas fa-question-circle"></i></NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;