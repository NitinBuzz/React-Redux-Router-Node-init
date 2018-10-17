import axios from "axios";

export const getFeatures = (user, callback) => {
  return async dispatch => {
    try {
      const response = await axios.post(`/getFeatures/${user}`);
      dispatch({ type: "USER_FEATURES", payload: response.data.features });
    } catch (e) {
      dispatch({
        type: "FEATURE_ERR",
        payload: "Please try again in some time"
      });
    }
  };
};
