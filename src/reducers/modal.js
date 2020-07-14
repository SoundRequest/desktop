import {
  MODAL_VISIBLE_ADDSONG,
  MODAL_CLOSE_ALL,
  MODAL_VISIBLE_EDITSONG,
  MODAL_VISIBLE_ADDLIST,
  MODAL_VISIBLE_MOVEPLAYLIST
} from '../actions/types'

const DEFAULT_STATE = {
  addSong: false,
  addPlayList: false,
  editSong: false,
  movePlaylist: false,
  editSongData: {
    name: '',
    description: '',
    link: '',
    target: 0
  },
  movePlaylistData: {
    id: 0
  },
  on: false
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case MODAL_VISIBLE_ADDSONG:
      return {
        ...state,
        addSong: true,
        on: true
      }
    case MODAL_VISIBLE_ADDLIST:
      return {
        ...state,
        addPlayList: true,
        on: true
      }
    case MODAL_VISIBLE_EDITSONG:
      return {
        ...state,
        editSong: true,
        on: true,
        editSongData: {
          ...action.payload
        }
      }
    case MODAL_VISIBLE_MOVEPLAYLIST:
      return {
        ...state,
        movePlaylist: true,
        on: true,
        movePlaylistData: {
          id: action.payload.id
        }
      }
    case MODAL_CLOSE_ALL:
      return {
        ...DEFAULT_STATE
      }
    default:
      return state
  }
}
