import { combineReducers } from 'redux'

import authReducer from './auth'
import playerReducer from './auth'

export default combineReducers({
  auth: authReducer,
  player: playerReducer
})
