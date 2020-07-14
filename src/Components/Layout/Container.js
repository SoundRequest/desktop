import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions_modal from 'src/actions/modal'
import { withRouter } from 'react-router-dom'
import {
  faAngleRight,
  faAngleLeft,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

const Container = ({ title, children, addSongModal }) => {
  return (
    <div className='mx-20 pt-8'>
      <div className='mb-12 text-xl font-bold flex justify-between'>
        <div className='flex'>
          <div className='mr-4'>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className=''>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className='ml-8 w-64 h-8' style={{ fontSize: '16px' }}>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '
              type='text'
              placeholder='검색'
            />
          </div>
        </div>
        <div className='flex '>
          <div
            className='hover:text-gray-600 cursor-pointer'
            onClick={() => addSongModal(true)}>
            <FontAwesomeIcon icon={faPlus} className='ml-2 xl:none' />
            <span className='ml-2 hidden xl:inline'>노래</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
const mapStateToProps = (state) => ({})

export default compose(connect(mapStateToProps, actions_modal))(
  withRouter(Container)
)
