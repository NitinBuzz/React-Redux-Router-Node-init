import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { signin } from "../actions/authActions";

class SignIn extends Component {
  onSubmit = formProps => {
    this.props.actions.signin(formProps, () => {
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
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field name="email" type="text" component="input" />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field name="password" type="password" component="input" />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button>Sing In!</button>
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
    actions: bindActionCreators({ signin }, dispatch)
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: "signin" })
)(SignIn);
