import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './Navbar';

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

class Camera extends React.Component {
  render() {
    return <p>Camera</p>;
  }
}

class Stats extends React.Component {
  render() {
    return <p>Stats</p>;
  }
}

class Help extends React.Component {
  render() {
    return <p>Help</p>;
  }
}

export default Home;
