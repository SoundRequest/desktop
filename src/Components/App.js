import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SideNav from './SideNav'
import PlayerBar from './Player/PlayerBar'
import Lyrics from './Player/Lyrics.js'
import MusicItem from './Player/MusicItem.js'
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
      light:false,
      played:0
    };
  }
  
  updatePlayer = (playerData) => {
    this.setState(playerData);
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
        <ReactPlayer
          class='row'
          width='300px'
          height='300px'
          url={this.state.url}
          playing={this.state.playing}
          loop={this.state.loop}
          light={this.state.light}
          progressInterval={100}
          onProgress={(progress)=>{this.setState({played:progress.played});}}
        />
        <div class='playitem'>
          <MusicItem url='https://youtu.be/UOxkGD8qRB4' data={this.state} updatePlayer={this.updatePlayer} />
          <MusicItem url='https://youtu.be/_LLCz1FCWrY' data={this.state} updatePlayer={this.updatePlayer} />
          <MusicItem url='https://youtu.be/dTwj7PhpY9M' data={this.state} updatePlayer={this.updatePlayer} />
        </div>
        <PlayerBar data={this.state} updatePlayer={this.updatePlayer} />
        <SideNav />
        
        <div style={{ marginLeft: '240px' }}>{this.props.children}</div>
      </div>
    )
  }
}

//<Lyrics />

export default withRouter(App)
