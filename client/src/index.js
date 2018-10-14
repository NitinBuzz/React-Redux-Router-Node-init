import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./Routes/Root";

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById("root")
);
