import axios from 'axios'
import { AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_SIGN_IN, AUTH_ERROR } from './types'

const backendUrl = 'http://localhost:3000'

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const { email, password } = data
      const res = await axios.post(backendUrl + '/users/signup', {
        email,
        password
      })

      dispatch({ type: AUTH_SIGN_UP, payload: res.data.token })
      localStorage.setItem('JWT_TOKEN', res.data.token)
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: 'Email is already in use' })
    }
  }
}

export const signIn = (data) => {
  return async (dispatch) => {
    try {
      const { email, password } = data
      const res = await axios.post(backendUrl + '/users/signin', {
        email,
        password
      })

      console.log(res.data.token)
      dispatch({ type: AUTH_SIGN_IN, payload: res.data.token })
      localStorage.setItem('JWT_TOKEN', res.data.token)
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: 'Email is already in use' })
    }
  }
}

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('JWT_TOKEN')
      const res = await axios.post(
        backendUrl + '/users/status',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )

      dispatch({ type: AUTH_SIGN_IN, payload: token })
    } catch (err) {}
  }
}

// export const oauthFacebook = (data) => {
//   return async (dispatch) => {
//     try {
//       console.log("[ActionCreator] oauthFacebook called!");
//       const { token } = data;
//       const res = await axios.post(backendUrl + "/users/oauth/facebook", {
//         access_token: token,
//       });
//       console.log("[ActionCreator] oauthFacebook dispatched an action!");
//       dispatch({ type: AUTH_SIGN_UP, payload: res.data.token });
//       localStorage.setItem("JWT_TOKEN", res.data.token);
//     } catch (error) {
//       dispatch({ type: AUTH_ERROR, payload: "Error While Processing" });
//     }
//   };
// };

export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem('JWT_TOKEN')

    dispatch({
      type: AUTH_SIGN_OUT
    })
  }
}
