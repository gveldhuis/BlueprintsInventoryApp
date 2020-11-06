import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './Navbar';
import Help from './Help';
import Stats from './Stats';
import Scanner from './Scanner';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Redirect exact from="/" to="/scan"/>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/scan">
            <Scanner />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
        <Navbar />
      </div>
    );
  }
}

export default Home;
