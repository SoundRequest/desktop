import React from 'react'
import styles from '../../assets/styles/settings.module.css'

export default ({ value, onChage }) => {
  return (
    <label
      htmlFor='toggleDarkmode'
      className='cursor-pointer ml-4 relative cursor-not-allowed'>
      <div
        className='relative'
        style={{ top: '50%', transform: 'translateY(-50%)' }}>
        <input id='toggleDarkmode' type='checkbox' className='hidden' />
        <div
          className={`${styles.toggle_line} w-10 h-4 bg-gray-400 rounded-full shadow-inner`}></div>
        <div
          className={`${styles.toggle_dot} absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0`}></div>
      </div>
    </label>
  )
}
