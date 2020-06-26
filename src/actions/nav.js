import { NAVIGATION_CHANGE } from "../actions/types";
import { withRouter } from "react-router-dom";

export const changePage = withRouter(({ page, navigation }) => {
  return async (dispatch) => {
    dispatch({ type: NAVIGATION_CHANGE, payload: page });
  };
});
