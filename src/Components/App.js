import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../actions/player'
import { withRouter } from 'react-router-dom'
import SideNav from './SideNav'
import ReactPlayer from 'react-player'
import moment from 'moment'

class App extends Component {
  render() {
    if (this.props.location.pathname === '/signin') {
      return (
        <div id='App' className='bg-gray-10 0 text-gray-700'>
          {this.props.children}
        </div>
      )
    }
    return (
      <div id='App' className='bg-gray-10 0 text-gray-700'>
        <SideNav />
        <div style={{ marginLeft: '240px' }}>{this.props.children}</div>
      </div>
    )
  }
}

export default withRouter(App)
