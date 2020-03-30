import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// higher order component to control auth requirement
// on wrapped pages
export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      /**
        * false - user is not logged in
        * null - user login is stull pending
        * default - user is logged in, show page
      */
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props} />
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
