import React from 'react';
import Cookie from 'js.cookie';
import {
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

const useridCookieName = 'userid';
const eventTokenCookieName = 'eventToken';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userid: '',
      eventToken: '',
    };
  }

  componentDidMount() {
    const userid = Cookie.get(useridCookieName);
    const eventToken = Cookie.get(eventTokenCookieName);
    const isLoggedIn = userid !== undefined && eventToken !== undefined;

    this.setState({
      isLoggedIn,
      userid: (userid !== undefined) ? userid : '',
      eventToken: (eventToken !== undefined) ? eventToken : '',
    });
  }

  setLogin(userid, eventToken) {
    Cookie.set(useridCookieName, userid);
    Cookie.set(eventTokenCookieName, eventToken);

    this.setState({
      isLoggedIn: true,
      userid,
      eventToken,
    });
  }

  clearLogin() {
    Cookie.remove(useridCookieName);
    Cookie.remove(eventTokenCookieName);

    this.setState({
      isLoggedIn: false,
      userid: '',
      eventToken: '',
    });
  }

  render() {
    const { isLoggedIn, userid, eventToken } = this.state;
    const Authentication = React.createContext({
      isLoggedIn,
      userid,
      eventToken,
      setLogin: this.setLogin,
      clearLogin: this.clearLogin,
    });

    return (
      // Router allows app to use React routing
      // Authentication Provider allows entire app to access login state
      <Router>
        <Authentication.Provider>
          {isLoggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Authentication.Provider>
      </Router>
    );
  }
}

export default App;
