import axios from "axios";

export const signup = (formProps, callback) => {
  return async dispatch => {
    try {
      const response = await axios.post("/signup", {
        formProps
      });
      dispatch({ type: "AUTH_USER", payload: response.data.token });
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: "AUTH_ERR", payload: "Eamil in use" });
    }
  };
};

export const signin = (formProps, callback) => {
  return async dispatch => {
    try {
      const response = await axios.post("/signin", {
        email: formProps.email,
        password: formProps.password
      });
      dispatch({ type: "AUTH_USER", payload: response.data.token });
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: "AUTH_ERR", payload: "Invalid login creds" });
    }
  };
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: "AUTH_USER",
    payload: ""
  };
};
