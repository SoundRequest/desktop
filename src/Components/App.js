import React, { Component } from 'react'
import SideNav from './SideNav'

class App extends Component {
  render() {
    return (
      <div id='App' className='bg-gray-900'>
        <SideNav />
        <div style={{ marginLeft: '20vw' }}>{this.props.children}</div>
      </div>
    )
  }
}

export default App
