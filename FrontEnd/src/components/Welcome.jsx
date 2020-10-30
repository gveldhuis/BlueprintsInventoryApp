import React from 'react';
import {
  Link,
} from 'react-router-dom';

class Stats extends React.Component {
  render() {
    return (
      <div className="h-screen">
        <div className="flex h-2/5 items-end justify-center">
          <h1 className="page_header font-semibold">Welcome!</h1>
        </div>
        <div className="flex h-1/5 items-center justify-center my-md mx-md">
          <p className="paragraph text-center">
            Thank you so much for your hard work and dedication. With your help 
            we will be able to help the hospitals of the world better serve their
            patients with quality medical supplies
          </p>
        </div>
        <div className="flex h-2/5 items-start justify-center">
          <Link to="/" className="pill_button">Let's begin!</Link>
        </div>
      </div>
    );
  }
}

export default Stats;
