import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Login from './views/user/Login';
import Todo from './views/todo/todo';
import RegisterUserForm from './views/user/RegisterUser';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Divider } from 'antd';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Todo React App</h1>
        </header>

        <Router>
          <div>
            <Divider>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </Divider>
            <Switch>
              <Route path="/signup">
                <RegisterUserForm />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Todo />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
