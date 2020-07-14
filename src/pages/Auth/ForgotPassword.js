import React from 'react'
import Input from 'src/components/FormItem/Input'
import AuthContainer from 'src/components/Layout/AuthContainer'
import { withRouter } from 'react-router-dom'

class ForgotPassword extends React.Component {
  state = {
    email: '',
    showNext: false,
    verifyCode: '',
    new: '',
    newVerify: ''
  }

  handleSendCode = () => {
    // TODO: 백엔드 연결
    this.setState({ showNext: true })
  }

  handleSendReset = () => {
    // TODO: 백엔드 연결
    this.props.history.push('/signin')
  }

  first = () => {
    return (
      <>
        <div className='text-3xl font-bold text-center'>SoundRequest</div>
        <div className='md:flex md:items-center my-6 '>
          <Input
            type='email'
            placeholder='이메일'
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className='md:flex md:items-center'>
          <div className='mx-auto'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-24 rounded-full'
              onClick={this.handleSendCode}
              type='button'>
              이메일로 인증번호 보내기
            </button>
          </div>
        </div>
      </>
    )
  }
  second = () => {
    return (
      <>
        <div className='text-3xl font-bold text-center'>SoundRequest</div>
        <div className='md:flex md:items-center my-6 '>
          <Input type='text' placeholder='인증코드' />
        </div>
        <div className='md:flex md:items-center my-6 '>
          <Input type='text' placeholder='새 비밀번호' />
        </div>
        <div className='md:flex md:items-center my-6 '>
          <Input type='text' placeholder='새 비밀번호 확인' />
        </div>
        <div className='mb-6 text-center'>
          <span
            className='text-md text-gray-600 hover:text-gray-800 cursor-pointer border-b-2 border-dashed'
            onClick={() => this.setState({ showNext: false })}>
            뒤로가기
          </span>
        </div>
        <div className='md:flex md:items-center'>
          <div className='mx-auto'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-24 rounded-full'
              type='button'
              onClick={this.handleSendReset}>
              변경
            </button>
          </div>
        </div>
      </>
    )
  }

  render() {
    return (
      <AuthContainer
        text1='비밀번호가 기억났나요?'
        text2='여기를 클릭하여 로그인하세요!'
        onClick={() => this.props.history.push('/signin')}>
        {!this.state.showNext ? <this.first /> : <this.second />}
      </AuthContainer>
    )
  }
}

export default withRouter(ForgotPassword)
