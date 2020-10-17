import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Authentication from '../utils/Auth';
import {
  getCookie,
  setCookie,
  removeCookie,
} from '../utils/session_utils';

const useridCookieName = 'userid';
const eventTokenCookieName = 'eventToken';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      firstLogin: true,
      userid: '',
      eventToken: '',
    };
    this.setLogin = this.setLogin.bind(this);
    this.clearLogin = this.clearLogin.bind(this);
  }

  componentDidMount() {
    const userid = getCookie(useridCookieName);
    const eventToken = getCookie(eventTokenCookieName);
    const userCookieSet = userid !== undefined;
    const eventCookieSet = eventToken !== undefined;

    this.setState({
      isLoggedIn: userCookieSet && eventCookieSet,
      firstLogin: !userCookieSet || !eventCookieSet,
      userid: (userCookieSet) ? userid : '',
      eventToken: (eventCookieSet) ? eventToken : '',
    });
  }

  setLogin(userid, eventToken) {
    setCookie(useridCookieName, userid);
    setCookie(eventTokenCookieName, eventToken);

    this.setState({
      isLoggedIn: true,
      firstLogin: true,
      userid,
      eventToken,
    });
  }

  clearLogin() {
    removeCookie(useridCookieName);
    removeCookie(eventTokenCookieName);

    this.setState({
      isLoggedIn: false,
      firstLogin: true,
      userid: '',
      eventToken: '',
    });
  }

  render() {
    const { isLoggedIn, firstLogin, userid, eventToken } = this.state;

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

    return (
      // Router allows app to use React routing
      // Authentication Provider allows entire app to access login state
      <Router>
        <Authentication.Provider 
          value={{
            userid,
            eventToken,
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

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to app</h1>
        <p>This is our mission</p>
        <Link to="/">Join us</Link>
      </div>
    );
  }
}

export default App;
