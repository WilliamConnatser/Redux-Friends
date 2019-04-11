import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({
    component: Component,
    error,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
            if (localStorage.getItem('token') && !error) {
                return <Component {...props}/>;
            } else {
                alert(error);
                return <Redirect to="/login"/>;
            }
        }}/>
    );
};

const mapStateToProps = ({error}) => ({error});

export default connect(mapStateToProps, {})(PrivateRoute);
