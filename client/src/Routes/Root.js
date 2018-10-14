import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../component/App";
import Nin from "../component/Nin";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/nin" component={Nin} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
