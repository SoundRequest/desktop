import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from 'src/actions/auth'
import Input from 'src/components/FormItem/Input'
import AuthContainer from 'src/components/Layout/AuthContainer'

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    errorMsg: ''
  }

  onFinish = async () => {
    this.setState({ errorMsg: '' })
    const { name, email, password, passwordConfirm } = this.state
    const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
    const pwdRule = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
    const noAirPwd = password.replace(/\s/g, '')
    const noAirPwdConf = passwordConfirm.replace(/\s/g, '')
    const noAirName = name.replace(/\s/g, '')
    const noAirEmail = email.replace(/\s/g, '')
    if (!name || !email || !password || !passwordConfirm) {
      this.setState({ errorMsg: '모든 향목을 채워주세요' })
    } else if (!emailRule.test(noAirEmail)) {
      this.setState({ errorMsg: '올바른 이메일주소를 넣어주세요' })
    } else if (!pwdRule.test(noAirPwd)) {
      this.setState({
        errorMsg:
          '비밀번호는 대문자 하나, 소문자 하나, 특수문자 하나를 포함해서 8~16글자로 넣어주세요'
      })
    } else if (noAirPwd !== noAirPwdConf) {
      this.setState({ errorMsg: '비밀번호확인이 일치하지 않습니다.' })
    } else {
      await this.props.signUp({
        name: noAirName,
        email: noAirEmail,
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
        text1='이미 계정이 있으신가요?'
        text2='여기를 클릭하여 로그인하세요!'
        onClick={() => this.props.history.push('/signin')}>
        <div className='text-3xl font-bold text-center'>SoundRequest</div>
        <div className='md:flex md:items-center mt-6 mb-4'>
          <Input
            type='nickname'
            placeholder='유저이름'
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className='md:flex md:items-center mb-4 '>
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
          />
        </div>
        <div className='md:flex md:items-center mb-3'>
          <Input
            type='password'
            placeholder='비밀번호 확인'
            value={this.state.passwordConfirm}
            onChange={(e) => this.setState({ passwordConfirm: e.target.value })}
            onKeyDown={(e) => e.keyCode === 13 && this.onFinish()}
          />
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
              제출
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
export default compose(connect(mapStateToProps, actions))(SignUp)
