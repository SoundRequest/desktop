import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faColumns, fas } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

class PlayerBar extends Component {
  isLoaded = false;

  componentDidMount() {
    this.isLoaded = true;
    var slider = document.getElementById("player");
    var output = document.getElementById("currentValue");
    var target = document.getElementById("targetValue");
    target.innerHTML = '100'

    slider.addEventListener("mousemove", function(){
        output.innerHTML = this.value;
        var val = slider.value;
        var color = 'linear-gradient(90deg, rgb(255, 108, 171), rgb(115, 102, 255) ' + val + '%, #f0f0f0 ' + val + '%)';
        slider.style.background = color;
    })
  }

  updatePlayer =()=> {
    this.props.updatePlayer(this.props.data);
  }

  playerUpdate() {
    if(this.isLoaded){
      var slider = document.getElementById("player");
      var output = document.getElementById("currentValue");
      output.innerHTML = slider.value;
      slider.oninput = function() {
          output.innerHTML = this.value;
      }
      var slider = document.getElementById("player");
      var color = 'linear-gradient(90deg, rgb(255, 108, 171), rgb(115, 102, 255) ' + this.props.data.played*100 + '%, #f0f0f0 ' + this.props.data.played*100 + '%)';
      slider.style.background = color;
    }
  }

  render() {
    return (
      <div id='playerBar'>
        <div class='row'>
          <div class='col'><span id='currentValue'/></div>
          <div class='col slidecontainer'>
            <input type='range' min='0' max='100' value={this.props.data.played*100} class='slider' id='player' onChange={this.playerUpdate()}/>
          </div>
          <div class='col'><span id='targetValue'/></div>
        </div>
        <button onClick={() => {this.props.data.playing = !this.props.data.playing; this.updatePlayer(this.props.data);}}>재생/일시중지</button>
      </div>
    )
  }
}

export default withRouter(PlayerBar)