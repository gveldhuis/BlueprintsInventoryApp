import React from 'react';
import {
  Link,
} from 'react-router-dom';

class Stats extends React.Component {
  render() {
    return (
      <div className="h-screen">
        <div className="flex h-1/5 items-end justify-center">
          <div className="flex justify-center items-end h-1/5">
                <img
                  src={require('assets/images/Blueprints_Logo4.png')} 
                  alt = "Logo"
                  className="w-1/12 object-contain"
                />
              </div>
        </div>
        <div className="h-1/10 flex items-end justify-center">
        <h1 className="page_header font-semibold">Statistics</h1>
        </div>

        <div className="flex  items-center justify-center my-md mx-md">
          <p className="text-2xl paragraph text-center">
          Today, you have inventoried
          </p>
        </div>
        <div className="flex  items-end justify-center">
          <h1 className="page_header font-semibold">256</h1>
        </div>
        <div className="flex  items-center justify-center my-md mx-md">
          <p className="text-2xl paragraph text-center">
          medical supplies.
          </p>
        </div>
        <div className="flex  items-center justify-center my-md mx-md">
          <p className="text-2xl paragraph text-center">
          Today, you have inventoried
          </p>
        </div>
        <div className="flex items-end justify-center">
          <h1 className="page_header font-semibold">1,850</h1>
        </div>
        <div className="flex justify-center items-end">

              <div className="flex justify-center pt-md">
                    <input
                      type="submit"
                      value="Log out"
                      className="pill_button w-full "
                    />
                  </div>
      </div></div>
      
       
    );
  }
}

export default Stats;
