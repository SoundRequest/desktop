import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCog, faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class SideNav extends Component {
  render() {
    return (
      <div id='sideNav' className='p-4 pl-6 border-r border-gray-700'>
        <div className='mt-12'>
          <div className='flex flex-row'>
            <FontAwesomeIcon icon={faHome} size='lg' />
            <Link to='/' className='ml-4'>
              Home
            </Link>
          </div>
          <div className='flex flex-row mt-4'>
            <FontAwesomeIcon icon={faCog} size='lg' />
            <Link to='/settings' className='ml-4'>
              Settings
            </Link>
          </div>
        </div>
        <div className='mt-8'>
          <FontAwesomeIcon icon={faList} size='lg' />
          <Link to='/playlist' className='ml-4'>
            Playlist
          </Link>
        </div>
      </div>
    )
  }
}

export default SideNav
