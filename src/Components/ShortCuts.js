import React from 'react'
import ReactShortcut from 'react-shortcut'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions_player from '../actions/player'
import * as actions_modal from '../actions/modal'
import { withRouter } from 'react-router-dom'

class HotKey extends React.Component {
  list = [
    {
      keys: 'space',
      action: () => this.props.setPlay(!this.props.player.playing)
    },
    {
      keys: 'q',
      action: () => this.props.history.push('/')
    },
    {
      keys: 'w',
      action: () => this.props.history.push('/playlist')
    },
    {
      keys: 'e',
      action: () => this.props.history.push('/settings')
    },
    {
      keys: 'a',
      action: () => this.props.addSongModal()
    }
  ]

  state = { list: [] }
  componentDidMount() {
    this.setState({ list: this.list })
  }

  render() {
    return (
      <>
        {this.state.list.map((item, index) => {
          return (
            <ReactShortcut
              key={index}
              keys={item.keys}
              onKeysPressed={item.action}
            />
          )
        })}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  player: state.player
})

export default compose(
  connect(mapStateToProps, { ...actions_player, ...actions_modal })
)(withRouter(HotKey))
