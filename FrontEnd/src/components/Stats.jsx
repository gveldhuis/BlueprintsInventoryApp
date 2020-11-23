import React from 'react';
import Authentication from 'utils/Auth';
import { getUserStats } from 'utils/api_utils';

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
    const { auth } = this.props;
    getUserStats(auth.userid, auth.eventPassword)
    .then((data) => {
      this.setState({
        loading: false,
        today: data.today,
        all_time: data.allTime,
      });
    }).catch((error) => {
      alert("Unable to retrieve statistics for user.");
      console.log(error.message);
    });
  }

  render() {
    const { auth } = this.props;
    const {loading, today, all_time} = this.state;
    return (
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
            {(loading) ? "..." : today}
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
            {(loading) ? "..." : all_time}
          </h1>

          <p className="text-2xl paragraph text-center">
            medical supplies.
          </p>
        </div>

        <div className="flex justify-center items-start h-1/4 p-md">
          <button className="pill_button" onClick={auth.clearLogin}>
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

export default Stats;
