import React, { Component } from 'react'
import SideNav from './SideNav'

class App extends Component {
  render() {
    return (
      <div id='App' className='bg-gray-100 text-gray-700'>
        <SideNav />
        <div style={{ marginLeft: '240px' }}>{this.props.children}</div>
      </div>
    )
  }
}

export default App
