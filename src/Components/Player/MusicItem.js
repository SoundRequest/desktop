import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faColumns, fas } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

class MusicItem extends Component {
  play=()=> {
    this.props.data.playing = true;
    this.props.data.url = this.props.url;
    this.props.data.played = 0;
    this.props.updatePlayer(this.props.data);
  }

  render() {
    return (
      <div class='musicitem' onClick={this.play}>
        <p>{this.props.url}</p>
      </div>
    )
  }
}

export default withRouter(MusicItem)