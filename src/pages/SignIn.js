import React from 'react'

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <div className='flex h-full'>
        <div className='w-1/2 h-full bg-white shadow-sm' style={{ position: 'relative' }}>
          <div
            className=''
            style={{
              position: 'absolute',
              top: '40%',
              transform: 'translateY(-40%)',
              width: '100%'
            }}>
            <img src='/imgs/intro.svg' className='w-64 h-64 mx-auto' />
            <div className='text-center text-xl'>
              SoundRequest에 가입하세요!
            </div>
          </div>
        </div>
        <form className='w-1/2 px-16'>
          <div className='text-3xl font-bold mt-40 text-center'>
            SoundRequest
          </div>
          <div className='md:flex md:items-center my-6 '>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              type='email'
              placeholder='이메일'
            />
          </div>
          <div className='md:flex md:items-center mb-4'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              type='password'
              placeholder='비밀번호'
            />
          </div>
          <div className='mb-6 text-center'>
            <a className='text-md text-gray-600 hover:text-gray-800 cursor-pointer border-b-2 border-dashed'>
              비밀번호 찾기
            </a>
          </div>
          <div className='md:flex md:items-center'>
            <div className='mx-auto'>
              <button
                className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-24 rounded-full'
                type='button'>
                로그인
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn