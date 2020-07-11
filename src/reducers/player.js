import {PLAYER_SET_URL, PLAYER_PAUSE, PLAYER_PLAY, PLAYER_SET_VOLUME, PLAYER_STOP } from '../actions/types'

const DEFAULT_STATE = {
      url: null,
      playing: false,
      loop: false,
      volume: 0.5, //0~1
      light: false,
      played: 0,
      playedSeconds: '',
      loaded: 0,
      duration: ''
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case PLAYER_SET_URL:
        return {
            ...state,
            url: action.payload.url
        }
    case PLAYER_SET_VOLUME:
        return {
            ...state,
            volume: action.payload.volume
        }
    case PLAYER_PAUSE:
        return {
            ...state,
            playing: false
        }
    case PLAYER_SET_RESUME:
        return {
            ...state,
            playing: true
        }
    default:
      return state
  }
}
