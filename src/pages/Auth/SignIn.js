import React from 'react'
import Input from 'src/components/FormItem/Input'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from 'src/actions/auth'
import AuthContainer from 'src/components/Layout/AuthContainer'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    errorMsg: ''
  }

  onFinish = async () => {
    this.setState({ errorMsg: '' })
    const { email, password } = this.state
    const noAirEmail = email.replace(/\s/g, '')
    const noAirPwd = password.replace(/\s/g, '')
    if (!noAirEmail || !noAirPwd) {
      this.setState({ errorMsg: '모든 향목을 채워주세요' })
    } else {
      await this.props.signIn({
        name: noAirEmail,
        password: noAirPwd
      })
      if (this.props.errorMsg) {
        this.setState({ errorMsg: this.props.errorMsg })
      } else {
        this.props.history.push('/')
      }
    }
  }

  render() {
    return (
      <AuthContainer
        text1='SoundRequest 계정이 없나요?'
        text2='여기를 눌러 지금 가입해보세요!'
        onClick={() => this.props.history.push('/signup')}>
        <div className='text-3xl font-bold text-center'>SoundRequest</div>
        <div className='md:flex md:items-center my-6 '>
          <Input
            type='email'
            placeholder='이메일'
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className='md:flex md:items-center mb-4'>
          <Input
            type='password'
            placeholder='비밀번호'
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            onKeyDown={(e) => e.keyCode == 13 && this.onFinish()}
          />
        </div>
        <div className='mb-6 text-center'>
          <Link
            className='text-md text-gray-600 hover:text-gray-800 cursor-pointer border-b-2 border-dashed'
            to='/forgotpassword'>
            비밀번호 찾기
          </Link>
        </div>
        {this.state.errorMsg ? (
          <div className='text-center mb-3 text-red-500'>
            {this.state.errorMsg}
          </div>
        ) : (
          <div className='h-4'></div>
        )}
        <div className='md:flex md:items-center'>
          <div className='mx-auto'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-24 rounded-full'
              onClick={this.onFinish}
              type='button'>
              로그인
            </button>
          </div>
        </div>
      </AuthContainer>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    errorMsg: state.auth.errorMessage
  }
}
export default compose(connect(mapStateToProps, actions))(SignIn)
