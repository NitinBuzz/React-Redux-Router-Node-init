import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { simpleAction } from "../actions/index";

class Nin extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(`this props -- ${JSON.stringify(this.props)}`);
    this.props.actions.simpleAction();
  }
  render() {
    let result = this.props.state.result ? (
      this.props.state.result
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <h1>Hello</h1>
        <div> Nitin is cool...</div>
        <div>{result}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.simpleReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ simpleAction }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nin);
