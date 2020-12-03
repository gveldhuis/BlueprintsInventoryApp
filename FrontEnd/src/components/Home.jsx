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
import Authentication from 'utils/Auth';

class Home extends React.Component {
  render() {
    return (
      <Authentication.Consumer>
        {
          (auth) => (
            <div>
              <Switch>
                <Redirect exact from="/" to="/scan"/>
                <Route path="/stats">
                  <Stats auth={auth} />
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
          )
        }
      </Authentication.Consumer>
    );
  }
}

export default Home;
