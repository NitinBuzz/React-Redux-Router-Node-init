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
    return (
      <div
        style={{
          height: "95vh",
          background: `linear-gradient(to left bottom,#e6e6e6 , #fff)`,
          clipPath: `polygon( 0 0, 100% 0, 100% 75%, 0 100%)`
        }}
      >
        <p>We Rock</p>
      </div>
    );
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
