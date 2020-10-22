import React from 'react';
import {
  Link,
} from 'react-router-dom';

class Stats extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Here is our mission</p>
        <Link to="/">Let's begin</Link>
      </div>
    );
  }
}

export default Stats;
