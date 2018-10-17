const INIT_STATE = {
  _id: "",
  email: "",
  city: "Server",
  country: "Server",
  password: "lol",
  createdAt: "",
  __v: 0,
  errorMessage: ""
};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return { ...state, ...action.payload };
    case "USER_ERR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
