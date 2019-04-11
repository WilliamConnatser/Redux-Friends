import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/login';

class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    onChangeHandler = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.currentTarget.name]: event.currentTarget.value
            }
        });
    }

    onSubmitHandler = event => {
        event.preventDefault();
        this
            .props
            .login(this.state.credentials)
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
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.onChangeHandler}
                    placeholder="username"/>
                <br/>
                <input
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.onChangeHandler}
                    placeholder="password"/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStoreToProps = ({loggingIn, error}) => {
    return {error, loggingIn}
}

export default connect(mapStoreToProps, {login})(Login);
