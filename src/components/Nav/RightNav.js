import React from 'react'
import PlayerCore from 'src/components/Player/Core'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions/player'
import Axios from 'axios'

class RightNav extends React.Component {
  state = { lastSongName: '', text: '' }

  componentWillReceiveProps(nextProps) {
    if (this.state.lastSongName !== nextProps.name) {
      this.setState({ lastSongName: nextProps.name })
      Axios.get(
        `https://lyrics.tsu.sh/v1/?q=${nextProps.name.replace(/\s/g, '+')}`
      ).then((res) => {
        console.log(res)
      })
    }
  }

  render() {
    return (
      <div style={this.props.style}>
        <PlayerCore />
        {this.props.playing ? (
          <>
            <div className='pt-4'>
              <div>가사</div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.player.playing,
    name: state.player.name
  }
}

export default compose(connect(mapStateToProps, actions))(RightNav)
