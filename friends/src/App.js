import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            I've got friends in low places
          </h1>
          <Link to="/login">Login Here</Link>
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/friends-list" component={FriendsList} />
        </header>
      </div>
    );
  }
}

export default App;
