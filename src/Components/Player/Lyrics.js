import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faColumns } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

class PlayerBar extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <div class='card vertical-center'>
            가사창
        </div>
    )
  }
}

export default withRouter(PlayerBar)