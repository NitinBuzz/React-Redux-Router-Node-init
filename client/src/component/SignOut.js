import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../actions/authActions";

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return (
      <div>
        <p>Sorry to see you go</p>
      </div>
    );
  }
}

export default connect(
  null,
  { signout }
)(SignOut);
