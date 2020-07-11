import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions/player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faColumns,
  fas,
  faSleigh
} from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

class PlayerBar extends Component {
  isLoaded = false
  seeking = true
  playedSeconds = ''
  duration = ''
  color = ''

  componentDidMount() {
    this.isLoaded = true
  }

  updateMainPlayer = () => {
    this.props.updatePlayer(this.props.data)
  }

  playerUpdate = () => {
    if (this.isLoaded) {
      if (this.seeking) {
        this.playedSeconds = this.props.data.playedSeconds
        this.duration = this.props.data.duration

        var slider = document.getElementById('player')
        var playedText = document.getElementById('played')
        var durationText = document.getElementById('duration')
        playedText.innerHTML = this.props.data.playedSeconds
        durationText.innerHTML = this.props.data.duration

        var color =
          'linear-gradient(90deg, rgb(255, 108, 171), rgb(115, 102, 255) ' +
          this.props.data.played * 100 +
          '%, #f0f0f0 ' +
          this.props.data.played * 100 +
          '%)'
        slider.style.background = color
      } else {
        this.props.data.played = document.getElementById('player').value / 1000
      }
    }
  }

  render() {
    return (
      <div id='playerBar'>
        <div class='row'>
          <div class='col'>
            <p>{this.playedSeconds}</p>
          </div>
          <div class='col slidecontainer'>
            <input
              type='range'
              min='0'
              max='1000'
              value={this.props.data.played * 1000}
              class='slider'
              id='player'
              onChange={this.playerUpdate()}
              onMouseDown={() => {
                this.seeking = false
              }}
              onMouseUp={() => {
                this.seeking = true
                this.updateMainPlayer()
              }}
            />
          </div>
          <div class='col'>
            <p>{this.duration}</p>
          </div>
        </div>
        <button
          onClick={() => {
            this.props.data.playing = !this.props.data.playing
            this.updateMainPlayer()
          }}>
          재생/일시중지
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  player: state.player
})
export default compose(connect(mapStateToProps, actions))(withRouter(PlayerBar))
