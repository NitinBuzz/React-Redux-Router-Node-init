import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import simpleReducer from "./SimpleReducer";
import authReducer from "./authReducer";
import featureReducer from "./featureReducer";
import userReducer from "./userReducer";

export default combineReducers({
  simpleReducer,
  user: userReducer,
  auth: authReducer,
  form: formReducer,
  features: featureReducer
});
