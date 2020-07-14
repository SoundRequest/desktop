import React from 'react'
import { Link } from 'react-router-dom'

export default ({ children, text1, text2, onClick }) => {
  return (
    <div className='flex h-full'>
      <div
        className='w-1/2 h-full bg-white shadow-sm'
        style={{ position: 'relative' }}>
        <div
          className=''
          style={{
            position: 'absolute',
            top: '40%',
            transform: 'translateY(-40%)',
            width: '100%'
          }}>
          <img
            src='/imgs/intro.svg'
            className='w-64 h-64 mx-auto'
            alt='Intro'
          />
          <div className='text-center text-xl'>
            <div style={{cursor: "pointer", whiteSpace: 'pre-wrap'}} onClick={onClick}>
              {text1}{"\n"}{text2}
            </div>
          </div>
        </div>
      </div>
      <form className='w-1/2 px-16' style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
          {children}
        </div>
      </form>
    </div>
  )
}
