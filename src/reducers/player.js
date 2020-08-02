import {
  PLAYER_SET_SONG,
  PLAYER_PLAY,
  PLAYER_SET_VOLUME,
  PLAYER_SET_LIST,
  PLAYER_SET_DURATION,
  PLAYER_SET_PLAYLIST,
  PLAYER_SET_PROGRESS,
  PLAYER_SEEKTO
} from '../actions/types'
import { act } from 'react-dom/test-utils'

const DEFAULT_STATE = {
  songID: '',
  url: null,
  playing: false,
  loop: false,
  name: '',
  volume: 0.5, //0~1
  loaded: 0,
  loadedSeconds: 0,
  played: 0,
  playedSeconds: 0,
  list: [],
  listname: '',
  playList: [],
  seekTo: 0
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case PLAYER_SET_SONG:
      return {
        ...state,
        url: action.payload.url,
        songID: action.payload.ID,
        name: action.payload.name,
        playing: true
      }
    case PLAYER_SET_VOLUME:
      return {
        ...state,
        volume: action.payload.volume
      }
    case PLAYER_PLAY:
      return {
        ...state,
        playing: action.payload.playing
      }
    case PLAYER_SET_DURATION:
      return {
        ...state,
        duration: action.payload.duration
      }
    case PLAYER_SET_PROGRESS:
      return {
        ...state,
        ...action.payload
      }
    case PLAYER_SET_LIST:
      return {
        ...state,
        list: action.payload.list,
        listname: action.payload.listname
      }
    case PLAYER_SET_PLAYLIST:
      return {
        ...state,
        playList: action.payload.list
      }
    case PLAYER_SEEKTO:
      return {
        ...state,
        seekTo: action.payload.seekTo
      }
    default:
      return state
  }
}
