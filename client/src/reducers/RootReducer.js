import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import simpleReducer from "./SimpleReducer";
import authReducer from "./authReducer";
export default combineReducers({
  simpleReducer,
  auth: authReducer,
  form: formReducer
});
