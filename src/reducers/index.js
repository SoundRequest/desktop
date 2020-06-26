import { combineReducers } from "redux";

import authReducer from './auth'
import navReducer from './navigation'

export default combineReducers({
  auth: authReducer,
  nav: navReducer
})
