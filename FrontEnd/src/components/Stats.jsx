import React from 'react';
import Authentication from 'utils/Auth';

class Stats extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      today: 0,
      all_time: 0,
    };
  }
  
  componentDidMount() {
    // TODO #1:
    // Call api using auth values from this.props.auth
    // Set today and all_time in state with response of api (Hint: use .then())
  }

  render() {
    const {loading, today, all_time} = this.state;
    return (
      <Authentication.Consumer>
        {(auth) => (
          <div className="h-screen">

            <div className="flex justify-center items-center h-1/4">
              <h1 className="page_header text-6xl">
                Statistics
              </h1>
            </div>
    
            <div className="h-1/4 py-md">
              <p className="text-2xl paragraph text-center">
                Today, you have inventoried
              </p>
    
              <h1 className="page_header font-semibold">
                {/* TODO #2: If loading === true, display "..." else display all_time */}
                {today}
              </h1>
    
              <p className="text-2xl paragraph text-center">
                medical supplies.
              </p>
            </div>
    
    
            <div className="h-1/4 py-md">
              <p className="text-2xl paragraph text-center">
                In total, you have inventoried
              </p>
    
              <h1 className="page_header font-semibold">
                {/* TODO #2: If loading === true, display "..." else display all_time */}
                {all_time}
              </h1>
    
              <p className="text-2xl paragraph text-center">
                medical supplies.
              </p>
            </div>
    
            <div className="flex justify-center items-start h-1/4 p-md">
              {/* TODO #3: onClick, call this.props.auth.logout() */}
              <button className="pill_button">
                Log Out
              </button>
            </div>
          </div>
        )}
      </Authentication.Consumer>
    );
  }
}

export default Stats;
