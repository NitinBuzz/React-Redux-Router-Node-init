import axios from "axios";

export const signup = (formProps, callback) => {
  return async dispatch => {
    try {
      const response = await axios.post("/signup", {
        formProps
      });
      dispatch({ type: "AUTH_USER", payload: response.data.token });
      dispatch({ type: "SAVE_USER", payload: response.data.user });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user._id);
      localStorage.setItem("user_email", response.data.user.email);
      callback();
    } catch (e) {
      dispatch({ type: "AUTH_ERR", payload: "Eamil in use" });
      dispatch({ type: "USER_ERR", payload: "Eamil in use" });
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
      localStorage.setItem("user", response.data.user._id);
      localStorage.setItem("user_email", response.data.user.email);
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
