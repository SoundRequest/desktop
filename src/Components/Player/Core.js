import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions/player'

class PlayerCore extends React.Component {
  componentDidMount() {
    const volume = localStorage.getItem('volume')
    if (volume === null) {
      this.props.setVolume(0.5)
    } else {
      this.props.setVolume(volume)
    }
  }

  handleOnEnd = () => {
    const index =
      this.props.list.findIndex((i) => i.ID === this.props.songID) + 1
    if (index >= this.props.list.length) {
      alert('마지막 향목입니다')
      return
    }
    let listItem = this.props.list[index]
    this.props.setUrl(listItem.Link, listItem.Name, listItem.ID)
  }
  handleProgress = (data) => {
    this.props.setDuration(data)
  }

  render() {
    const { url, playing, volume } = this.props.player
    return (
      <ReactPlayer
        url={url}
        playing={playing}
        volume={parseFloat(volume)}
        onEnded={this.handleOnEnd}
        onProgress={this.handleProgress}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          disabled: true,
          // pointerEvents: 'none',
          width: '640px'
        }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player,
    songID: state.player.songID,
    list: state.player.list
  }
}
export default compose(connect(mapStateToProps, actions))(PlayerCore)
