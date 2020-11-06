import React from 'react';
import {
  Link,
} from 'react-router-dom';

class Stats extends React.Component {
  render() {
    return (
      <div className="h-screen">
        <div className="flex h-1/5 items-end justify-center">
          <h1 className="text-6xl page_header font-semibold">Welcome!</h1>
        </div>
        <div className="flex h-3/5 items-center justify-center my-md mx-md py-lg">
          <p className="text-3xl paragraph text-center w-3/4">
          Welcome to our
          Blueprints For
          Pangaea Inventory
          Event! Thanks to
          volunteers like you,
          Blueprints is able to
          donate nearly $1M
          worth of medical
          supplies every year
          to those that need
          them most.
          </p>
        </div>
        <div className="flex h-3/5 items-center justify-center my-md mx-md pb-xl">
          <p className="text-3xl paragraph text-center w-3/4">
          Our founder, Ben
          Rathi, often said
          that “A single
          needle can save a
          life.” With the
          supplies you are
          going to inventory,
          your are helping us
          change thousands
          of lives.
          </p>
        </div>
        <div className="flex h-1/6 items-end justify-center pb-xl">
          <div className="flex justify-center items-end h-1/6">
                <img
                  src={require('assets/images/Blueprints_Logo4.png')} 
                  alt = "Logo"
                  className="w-1/6 object-contain"
                />
              </div>
        </div>
        <div className="sticky bottom-0 flex h-1/12 items-start justify-center">
          <Link to="/" className="rounded-b-none rounded-t-5xl pill_button w-2/3 text-center text-4xl py-md whitespace-no-wrap">Let's begin!</Link>
        </div>
      </div>
    );
  }
}

export default Stats;
