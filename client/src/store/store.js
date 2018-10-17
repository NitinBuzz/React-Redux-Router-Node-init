import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/RootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    {
      auth: { authenticated: localStorage.getItem("token"), errorMessage: "" },
      user: {
        _id: localStorage.getItem("user"),
        email: localStorage.getItem("user_email")
      }
    },
    composeEnhancers(applyMiddleware(thunk))
  );
}
