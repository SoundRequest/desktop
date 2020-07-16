import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions/player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStepBackward,
  faStepForward,
  faPauseCircle,
  faPlayCircle,
  faVolumeMute,
  faVolumeDown,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
import Art from '../../assets/imgs/art.png'
import moment from 'moment'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'

import 'rc-tooltip/assets/bootstrap.css'
const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)
const { Handle } = Slider

class PlayerBar extends Component {
  state = {
    value: 0,
    mute: false,
    lastVolume: 0
  }

  handleMute = () => {
    if (this.state.mute) {
      this.props.setVolume(this.state.lastVolume)
      this.setState({ mute: false })
    } else {
      this.props.setVolume(0)
      this.setState({ lastVolume: this.props.player.volume, mute: true })
    }
  }

  secondsFormat = (secs) => {
    var sec_num = parseInt(secs, 10) // don't forget the second param
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor((sec_num - hours * 3600) / 60)
    var seconds = sec_num - hours * 3600 - minutes * 60

    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    return hours + ':' + minutes + ':' + seconds
  }

  handleBack = () => {
    const index =
      this.props.list.findIndex((i) => i.ID === this.props.songID) - 1
    if (index < 0) {
      //alert('첫번째 향목입니다')
      return
    }
    let listItem = this.props.list[index]
    this.props.setUrl(listItem.Link, listItem.Name, listItem.ID)
  }

  handleForward = () => {
    const index =
      this.props.list.findIndex((i) => i.ID === this.props.songID) + 1
    if (index >= this.props.list.length) {
      //alert('마지막 향목입니다')
      return
    }
    let listItem = this.props.list[index]
    this.props.setUrl(listItem.Link, listItem.Name, listItem.ID)
  }

  componentDidMount() {}

  render() {
    const { playing, name, volume } = this.props.player
    const { played, playedSeconds } = this.props.duration
    return (
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100vw',
          zIndex: '100',
          backgroundColor: '#2c2c2c',
          height: '60px'
        }}
        className='pl-4 py-2 text-white'>
        <div className='flex justify-between w-full'>
          <div
            className='flex'
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)'
            }}>
            <div className='mr-3'>
              <img
                src={Art}
                alt='art'
                className='mx-auto'
                style={{
                  width: 32,
                  height: 32
                }}
                className='shadow-2xl'
              />
            </div>
            <div className='mr-4'>
              <div>{name}</div>
            </div>
            <div className='sound-controller flex'>
              <div className='mr-3 cursor-pointer'>
                <FontAwesomeIcon
                  icon={faStepBackward}
                  onClick={this.handleBack}
                />
              </div>
              <div className='cursor-pointer'>
                <FontAwesomeIcon
                  style={{}}
                  className='text-3xl'
                  icon={playing ? faPauseCircle : faPlayCircle}
                  onClick={() => this.props.setPlay(!playing)}
                />
              </div>
              <div className='ml-3 cursor-pointer'>
                <FontAwesomeIcon
                  icon={faStepForward}
                  onClick={this.handleForward}
                />
              </div>
            </div>
            <div className='ml-4'>{this.secondsFormat(playedSeconds)}</div>
            <div className='ml-4 w-32 my-auto'>
              <Slider
                min={0}
                max={1}
                value={played}
                onChange={(value) => console.log(value)}
                step={0.0001}
              />
            </div>
            {/* <div className='ml-4'>
              {this.secondsFormat(playedSeconds)}
            </div> */}
          </div>

          <div
            className='flex mr-4'
            style={{
              position: 'absolute',
              top: '50%',
              right: '0%',
              transform: 'translateY(-50%)'
            }}>
            <div className='mr-4'>
              <FontAwesomeIcon
                icon={
                  volume < 0.1
                    ? faVolumeMute
                    : volume > 0.49
                    ? faVolumeUp
                    : faVolumeDown
                }
                onClick={this.handleMute}
              />
            </div>
            <div className='w-24 my-auto'>
              <Slider
                min={0}
                max={1}
                value={volume}
                onChange={(value) =>
                  this.state.mute
                    ? this.setState(
                        { mute: false },
                        this.props.setVolume(value)
                      )
                    : this.props.setVolume(value)
                }
                step={0.0001}
              />
            </div>
            <div className='ml-4'>
              {Math.round(volume * 100).toString() + '%'}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
  duration: state.player.duration,
  list: state.player.list,
  songID: state.player.songID
})
export default compose(connect(mapStateToProps, actions))(withRouter(PlayerBar))
