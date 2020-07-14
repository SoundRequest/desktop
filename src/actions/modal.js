import {
  MODAL_VISIBLE_ADDSONG,
  MODAL_CLOSE_ALL,
  MODAL_VISIBLE_EDITSONG,
  MODAL_VISIBLE_ADDLIST,
  MODAL_VISIBLE_MOVEPLAYLIST
} from '../actions/types'

export const addSongModal = () => {
  return (dispatch) => {
    dispatch({
      type: MODAL_VISIBLE_ADDSONG
    })
  }
}

export const addPlayList = () => {
  return (dispatch) => {
    dispatch({
      type: MODAL_VISIBLE_ADDLIST
    })
  }
}

export const closeAllModal = () => {
  return (dispatch) => {
    dispatch({
      type: MODAL_CLOSE_ALL
    })
  }
}

export const editSongModal = (data) => {
  return (dispatch) => {
    const { name, description, link, target } = data
    dispatch({
      type: MODAL_VISIBLE_EDITSONG,
      payload: {
        name,
        description,
        link,
        target
      }
    })
  }
}
export const movePlaylistModal = (id) => {
  return (dispatch) => {
    dispatch({
      type: MODAL_VISIBLE_MOVEPLAYLIST,
      payload: {
        id
      }
    })
  }
}
