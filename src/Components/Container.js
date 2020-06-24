import React from 'react'

export default ({ title, children }) => {
  return (
    <div className='ml-20 pt-16'>
      <div className='mb-12 text-xl font-bold'>{title}</div>
      {children}
    </div>
  )
}
