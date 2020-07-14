import {
  AUTH_SIGN_UP,
  AUTH_SIGN_IN,
  AUTH_ERROR,
  AUTH_SIGN_OUT,
  AUTH_GET_INFO
} from '../actions/types'

const DEFAULT_STATE = {
  isAuthenticated: false,
  verified: false,
  token: '',
  errorMessage: '',
  info: {
    name: '',
    email: '',
    dark: false
  }
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        verified: action.payload.verified,
        errorMessage: ''
      }
    case AUTH_SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        verified: action.payload.verified,
        errorMessage: ''
      }
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }
    case AUTH_SIGN_OUT:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: false,
        verified: false,
        errorMessage: ''
      }
    case AUTH_GET_INFO:
      return {
        ...state,
        info: {
          ...state.info,
          name: action.payload.name,
          email: action.payload.email
        }
      }
    default:
      return state
  }
}
