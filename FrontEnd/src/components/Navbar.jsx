import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul class="bg-med_blue p-0 m-0 text-center flex justify-between w-full fixed bottom-0 rounded-t-lg"> 
          <li class="text-light_blue focus-within:text-white font-bold no-underline p-5 pl-10 pr-10 flex text-3xl"><NavLink exact to="/stats"><i className="fas fa-chart-line"></i></NavLink></li>
          <li class="text-light_blue focus-within:text-white font-bold no-underline p-5 pl-10 pr-10 flex text-3xl"><NavLink to="/camera"><i className="fas fa-camera"></i></NavLink></li>
          <li class="text-light_blue focus-within:text-white font-bold no-underline p-5 pl-10 pr-10 flex text-3xl"><NavLink to="/help"><i className="fas fa-question-circle"></i></NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;