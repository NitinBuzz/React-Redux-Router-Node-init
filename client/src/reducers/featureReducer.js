const INIT_STATE = {
  features: [],
  errorMessage: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "USER_FEATURES":
      return { ...state, features: action.payload };
    case "FEATURE_ERR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
