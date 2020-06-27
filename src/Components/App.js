import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SideNav from './SideNav'

class App extends Component {
  render() {
    if (this.props.location.pathname == '/signin') {
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
