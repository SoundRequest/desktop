import { NAVIGATION_CHANGE } from "../actions/types";

const DEFAULT_STATE = {
  now: "Home",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NAVIGATION_CHANGE:
      return { ...state, now: action.payload };
    default:
      return state;
  }
};
