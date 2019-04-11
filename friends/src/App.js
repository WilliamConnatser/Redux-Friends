import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        My Frands
                    </h1>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/add-friends" component={AddFriends}/>
                    <PrivateRoute path="/friends-list" component={FriendsList}/>
                </header>
            </div>
        );
    }
}

export default App;
