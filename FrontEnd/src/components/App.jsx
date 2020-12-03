import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Welcome from './Welcome';
import Authentication from 'utils/Auth';
import {
  getSession,
  setSession,
  clearSession,
} from 'utils/session_utils';

const cookieName = 'b4p_session';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // Read cookies
    const session = JSON.parse(getSession(cookieName));
    const sessionIsSet = session !== null;

    this.state = {
      isLoggedIn: sessionIsSet,
      firstLogin: !sessionIsSet,
      userid: (sessionIsSet) ? session['userid'] : '',
      eventPassword: (sessionIsSet) ? session['eventPassword'] : '',
    };
    this.setLogin = this.setLogin.bind(this);
    this.clearLogin = this.clearLogin.bind(this);
  }

  setLogin(userid, eventPassword) {
    const value = {
      userid,
      eventPassword,
    };
    setSession(cookieName, JSON.stringify(value));

    this.setState({
      isLoggedIn: true,
      firstLogin: true,
      userid,
      eventPassword,
    });
  }

  clearLogin() {
    clearSession(cookieName);

    this.setState({
      isLoggedIn: false,
      firstLogin: true,
      userid: '',
      eventPassword: '',
    });
  }

  render() {
    const { isLoggedIn, firstLogin, userid, eventPassword } = this.state;

    let login;
    if (isLoggedIn) {
      if (firstLogin) {
        login = <Redirect to="/welcome"/>
      } else {
        login = <Redirect to="/"/>
      }
    } else {
      login = <Login login={this.login} />;
    }

    let home;
    if (isLoggedIn) {
      home = <Home />;
    } else {
      home = <Redirect to="/login"/>
    }

    // Router allows app to use React routing
    // Authentication Provider allows entire app to access login state
    return (
      <Router>
        <Authentication.Provider
          value={{
            userid,
            eventPassword,
            setLogin: this.setLogin,
            clearLogin: this.clearLogin,
          }}
        >
          <Switch>
            <Route path="/login">
              {login}
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/">
              {home}
            </Route>
          </Switch>
        </Authentication.Provider>
      </Router>
    );
  }
}

export default App;
