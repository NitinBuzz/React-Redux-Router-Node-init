import React, { Component } from "react";
import requireAuth from "./requireAuth";
// import { reduxForm, Field } from "redux-form";
// import { connect } from "react-redux";
// import { bindActionCreators, compose } from "redux";
// import { signup } from "../actions/authActions";

class Feature extends Component {
  componentDidMount() {
    console.log(`this props -- ${JSON.stringify(this.props)}`);
  }
  render() {
    return <div>We Rock</div>;
  }
}

// const mapStateToProps = state => {
//   return {
//     errorMessage: state.auth.errorMessage
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators({ signup }, dispatch)
//   };
// };
// export default compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   ),
//   reduxForm({ form: "signup" })
// )(SignUp);

export default requireAuth(Feature);
