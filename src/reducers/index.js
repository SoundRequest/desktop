import { combineReducers } from 'redux'

import authReducer from './auth'
import playerReducer from './player'
import modalReducer from './modal'

export default combineReducers({
  auth: authReducer,
  player: playerReducer,
  modal: modalReducer
})
