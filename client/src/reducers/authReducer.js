const INIT_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "AUTH_USER":
      return { ...state, authenticated: action.payload };
    case "AUTH_ERR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
