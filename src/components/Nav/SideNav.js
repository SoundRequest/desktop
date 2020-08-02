import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faList,
  faColumns,
  faCog,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions_modal from '../../actions/modal'

class SideNav extends Component {
  navList = [
    {
      name: 'Home',
      icon: faHome,
      path: '/'
    },
    {
      name: 'Chart',
      icon: faColumns,
      path: '/chart'
    },
    // {
    //   name: 'PlayList',
    //   icon: faList,
    //   path: '/playlist'
    // },
    {
      name: 'Settings',
      icon: faCog,
      path: '/settings'
    }
  ]

  componentDidMount() {}

  render() {
    return (
      <div id='sideNav' className='p-4 p-6 bg-white shadow-sm'>
        <div className='text-center'>
          <img
            className='w-16 h-16 rounded-full mx-auto '
            src='/logo.png'
            alt='logo'
          />
          <div className='mt-2 font-bold text-md'>{this.props.data.name}</div>
          <div className='mt-1 text-sm text-gray-600'>
            {this.props.data.email}
          </div>
        </div>
        <div className='mt-12'>
          {this.navList.map((item, index) => (
            <div className='flex flex-row mb-4' key={index}>
              <div
                className={
                  this.props.location.pathname === item.path
                    ? 'text-purple-600'
                    : ''
                }>
                <FontAwesomeIcon icon={item.icon} className='text-xl my-auto' />
                <Link to={item.path} className='ml-4'>
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-8 text-gray-600 font-bold tracking-wider flex justify-between'>
          <div>MY MUSIC</div>
          <FontAwesomeIcon
            icon={faPlus}
            className='my-auto cursor-pointer'
            onClick={this.props.addPlayList}
          />
        </div>
        <div className='mt-6'>
          {this.props.playList.map((item, index) => (
            <div className='flex flex-row mb-4' key={index}>
              <div
                className={
                  this.props.location.pathname === '/listd' &&
                  this.props.location.search === `?id=${item.ID}`
                    ? 'text-purple-600'
                    : ''
                }>
                {/* <FontAwesomeIcon icon={fa} className='text-xl my-auto' /> */}
                <Link to={`/listd?id=${item.ID}`} className=''>
                  {item.Name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  playList: state.player.playList
})

export default compose(connect(mapStateToProps, { ...actions_modal }))(
  withRouter(SideNav)
)
