import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './Navbar';
import Help from './Help';
import Stats from './Stats';
import Camera from './Camera';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Redirect exact from="/" to="/camera"/>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/camera">
            <Camera />
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
