import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveFriend} from '../actions/saveFriend';

class AddFriends extends Component {

    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    onChangeHandler = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.currentTarget.name]: event.currentTarget.value
            }
        });
    }

    onSubmitHandler = event => {
        event.preventDefault();
        this
            .props
            .saveFriend(this.state.friend)
            .then(() => {
                this
                    .props
                    .history
                    .push('/friends-list');
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <h2>Add A Friend</h2>
                <input
                    name="name"
                    value={this.state.friend.name}
                    onChange={this.onChangeHandler}
                    placeholder="name"/>
                <br/>
                <input
                    name="age"
                    value={this.state.friend.age}
                    onChange={this.onChangeHandler}
                    placeholder="age"/>
                <br/>
                <input
                    name="email"
                    value={this.state.friend.email}
                    onChange={this.onChangeHandler}
                    placeholder="email"/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStoreToProps = ({savingFriends, error}) => {
    return {error, savingFriends}
}

export default connect(mapStoreToProps, {saveFriend})(AddFriends);