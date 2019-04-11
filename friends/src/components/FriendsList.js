import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFriends} from '../actions/fetch';
import {Link} from 'react-router-dom';
import Friend from './Friend';

class FriendsList extends Component {
    state = {
        friends: this.props.friends
    }
    componentDidMount() {
        this
            .props
            .getFriends();
    }
    render() {
        const friends = this
            .props
            .friends
            .map(friend =>< Friend friend = {
                friend
            }
            key = {
                friend.id
            } />);

        return (
            <div>
                <Link to="/add-friends" style={{color:'green'}}>Add Friends</Link>
                {friends}
            </div>
        )
    }
}

const mapStateToProps = ({friends}) => {
    return {friends}
}

export default connect(mapStateToProps, {getFriends})(FriendsList)