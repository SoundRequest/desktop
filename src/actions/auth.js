import axios from 'axios'
import {
  AUTH_SIGN_UP,
  AUTH_SIGN_OUT,
  AUTH_SIGN_IN,
  AUTH_ERROR,
  AUTH_GET_INFO
} from './types'
import config from '../config'

const backendUrl = config.baseurl

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const { email, password, name } = data
      const res = await axios.post(backendUrl + '/auth/signup', {
        name,
        email,
        password
      })

      dispatch({
        type: AUTH_SIGN_UP,
        payload: { token: res.data.token, verified: false }
      })
      localStorage.setItem('JWT_TOKEN', res.data.token)
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: '이메일이 이미 사용중입니다' })
    }
  }
}

export const signIn = (data) => {
  return async (dispatch) => {
    try {
      const { name, password } = data
      const res = await axios.post(backendUrl + '/auth/signin', {
        name,
        password
      })

      dispatch({
        type: AUTH_SIGN_IN,
        payload: { token: res.data.token, verified: res.data.verified }
      })
      localStorage.setItem('JWT_TOKEN', res.data.token)
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: '유저정보가 일치하지 않습니다' })
    }
  }
}

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('JWT_TOKEN')
      const res = await axios.get(backendUrl + '/auth/status', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })

      dispatch({
        type: AUTH_SIGN_IN,
        payload: { token: token, verified: res.data.verified }
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getInfo = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('JWT_TOKEN')
      const res = await axios.get(backendUrl + '/auth/profile', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })

      dispatch({
        type: AUTH_GET_INFO,
        payload: { ...res.data, token: token }
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem('JWT_TOKEN')

    dispatch({
      type: AUTH_SIGN_OUT
    })
  }
}
