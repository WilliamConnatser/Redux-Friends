import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFriends} from '../actions/fetch';
import Friend from './Friend';

class FriendsList extends Component {
    state = {
        friends: this.props.friends
    }
    componentDidMount() {
        this.props.getFriends();
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>My Frands:</h1>
                {this.props.friends.map(friend=><Friend friend={friend} key={friend.id} />)}
            </div>
        )
    }
}

const mapStateToProps = ({friends}) => {
    return {friends}
}

export default connect(mapStateToProps, {getFriends})(FriendsList)