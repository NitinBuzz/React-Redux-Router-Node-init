import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { signup } from "../actions/authActions";

class SignUp extends Component {
  onSubmit = formProps => {
    this.props.actions.signup(formProps, () => {
      this.props.history.push("/feature");
    });
    console.log(formProps);
  };
  componentDidMount() {
    console.log(`this props -- ${JSON.stringify(this.props)}`);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div
        style={{
          height: "95vh",
          background: `linear-gradient(to right bottom,rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.81)), url(./hero4.jpeg)`,
          backgroundSize: "cover",
          position: "relative",
          color: "#fff",
          clipPath: `polygon( 0 0, 100% 0, 100% 75%, 0 100%)`
        }}
      >
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div
            style={{
              paddingTop: "30px",
              paddingLeft: "30px",
              position: "absolute",
              top: "40%",
              left: "45%",
              transform: `translate(-50%, -50%)`,
              textAlign: "left"
            }}
          >
            <div
              style={{
                display: "block",
                fontWeight: "400",
                fontSize: "25px"
              }}
            >
              Register With Us
            </div>
            <div>
              <label>Name</label>
              <div style={{}}>
                <Field name="firstName" type="text" component="input" />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <Field name="email" type="text" component="input" />
              </div>
            </div>
            <div>
              <label>Date Of Birth</label>
              <div>
                <Field name="dob" type="date" component="input" />
              </div>
            </div>
            <div>
              <label>City</label>
              <div>
                <Field name="city" type="text" component="input" />
              </div>
            </div>
            <div>
              <label>Country</label>
              <div>
                <Field name="country" type="text" component="input" />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <Field name="password" type="password" component="input" />
              </div>
            </div>
            <div>{this.props.errorMessage}</div>
            <button
              style={{
                backgroundColor: "#fff",
                border: "none",
                color: "#049039",
                padding: "6px 6px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px 2px",
                cursor: "pointer"
              }}
            >
              Sing Up!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ signup }, dispatch)
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: "signup" })
)(SignUp);
