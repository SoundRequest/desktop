import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faColumns } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

class PlayerBar extends React.Component {
  playerData = {
    url:'https://www.youtube.com/watch?v=_LLCz1FCWrY',
    playing:false,
    loop:false,
    volume:0.5, //0~1
  }

  componentDidMount() {
    var slider = document.getElementById("player");
    var output = document.getElementById("currentValue");
    var target = document.getElementById("targetValue");
    output.innerHTML = slider.value;
    target.innerHTML = '100'

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
    slider.addEventListener("mousemove", function(){
        output.innerHTML = this.value;
        var val = slider.value;
        var color = 'linear-gradient(90deg, rgb(255, 108, 171), rgb(115, 102, 255) ' + val + '%, #f0f0f0 ' + val + '%)';
        slider.style.background = color;
    })
  }

  onPlayerStatusChange =()=> {
    this.props.updatePlayerStatus(this.playerData);
  }

  render() {
    return (
      <div id='playerBar'>
        <div class='row'>
          <div class='col'><span id='currentValue'/></div>
          <div class='col slidecontainer'>
            <input type='range' min='1' max='100' class='slider' id='player'/>
          </div>
          <div class='col'><span id='targetValue'/></div>
        </div>
        <button onClick={this.onPlayerStatusChange}>Setup Player</button>
        <button onClick={() => {this.playerData.playing = !this.playerData.playing; this.onPlayerStatusChange();}}>재생/일시중지</button>
      </div>
    )
  }
}

export default withRouter(PlayerBar)