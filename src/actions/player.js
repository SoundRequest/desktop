import {
  PLAYER_SET_SONG,
  PLAYER_PAUSE,
  PLAYER_PLAY,
  PLAYER_SET_VOLUME,
  PLAYER_STOP,
  PLAYER_SET_DURATION,
  PLAYER_SET_PROGRESS,
  PLAYER_SET_LIST,
  PLAYER_SET_PLAYLIST,
  PLAYER_SEEKTO
} from '../actions/types'
import Axios from 'axios'
import config from '../config'

export const setUrl = (url, name, ID) => {
  return (dispatch) => {
    dispatch({
      type: PLAYER_SET_SONG,
      payload: { url, name, ID }
    })
  }
}

export const setPlay = (playing) => {
  return (dispatch) => {
    dispatch({
      type: PLAYER_PLAY,
      payload: { playing }
    })
  }
}

export const setVolume = (volume) => {
  return (dispatch) => {
    localStorage.setItem('volume', volume)
    dispatch({
      type: PLAYER_SET_VOLUME,
      payload: { volume }
    })
  }
}

export const setProgress = (data) => {
  return (dispatch) => {
    const { loaded, loadedSeconds, played, playedSeconds } = data
    dispatch({
      type: PLAYER_SET_PROGRESS,
      payload: {
        loaded,
        loadedSeconds,
        played,
        playedSeconds
      }
    })
  }
}

export const setDuration = (data) => {
  return (dispatch) => {
    dispatch({
      type: PLAYER_SET_DURATION,
      payload: {
        duration: data
      }
    })
  }
}
export const setList = (listname, list) => {
  return (dispatch) => {
    dispatch({
      type: PLAYER_SET_LIST,
      payload: {
        list,
        listname
      }
    })
  }
}
export const setPlayList = (token) => {
  return async (dispatch) => {
    const res = await Axios.get(`${config.baseurl}/play/list`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    dispatch({
      type: PLAYER_SET_PLAYLIST,
      payload: {
        list: res.data.list
      }
    })
  }
}

export const seekTo = (seekTo) => {
  return (dispatch) => {
    dispatch({
      type: PLAYER_SEEKTO,
      payload: { seekTo }
    })
  }
}
