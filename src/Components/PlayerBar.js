import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faColumns } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

class PlayerBar extends Component {
  componentDidMount() {
    var slider = document.getElementById("player");
    var output = document.getElementById("v");
    output.innerHTML = slider.value;

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
  render() {
    return (
        <div id='playerBar'>
            <div class="slidecontainer">
                <input type="range" min="1" max="100" class="slider" id="player"/>
                <p>Value: <span id="v"/></p>
            </div>
        </div>
    )
  }
}

export default withRouter(PlayerBar)