import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../component/App";
import Nin from "../component/Nin";
import SignUp from "../component/SignUp";
import Feature from "../component/Feature";
import SignOut from "../component/SignOut";
import SignIn from "../component/SignIn";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/nin" component={Nin} />
        <Route path="/feature" component={Feature} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
