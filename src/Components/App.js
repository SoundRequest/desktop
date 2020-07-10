import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SideNav from './SideNav'
import PlayerBar from './Player/PlayerBar'
import Lyrics from './Player/Lyrics.js'
import ReactPlayer from 'react-player/youtube'

class App extends Component {
  //https://openbase.io/js/react-player
  constructor() {
    super();
    this.state = {
      url:null,
      playing:false,
      loop:false,
      volume:0.5, //0~1
    };
  }
  
  updatePlayerStatus = (playerData) => {
    this.setState({
      url:playerData.url,
      playing:playerData.playing,
      loop:playerData.loop,
      volume:playerData.volume,
      pip:playerData.pip
    });
  }

  render() {
    /*
    if (this.props.location.pathname === '/signin') {
      return (
        <div id='App' className='bg-gray-10 0 text-gray-700'>
          {this.props.children}
        </div>
      )
    }*/
    return (
      <div id='App' className='bg-gray-10 0 text-gray-700'>
        <ReactPlayer class='row' width='300px' height='300px' wed url={this.state.url} playing={this.state.playing} loop={this.state.loop} />
        <PlayerBar updatePlayerStatus={this.updatePlayerStatus} />
        <SideNav />
        <Lyrics />
        <div style={{ marginLeft: '240px' }}>{this.props.children}</div>
      </div>
    )
  }
}

export default withRouter(App)
