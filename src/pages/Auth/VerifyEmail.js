import React from 'react'
// import Input from 'src/components/FormItem/Input'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from 'src/actions/auth'
import AuthContainer from 'src/components/Layout/AuthContainer'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class VerifyEmail extends React.Component {
  state = {
    errorMsg: ''
  }

  onFinish = async () => {
    window.location.reload()
  }

  render() {
    return (
      <AuthContainer
        text1='다른 계정으로 가입하고 싶으신가요?'
        text2='여기를 눌러 다른 계정으로 전환하세요!'
        onClick={this.props.signOut}>
        <div className='text-3xl font-bold text-center'>SoundRequest</div>
        <div className='text-1xl font-bold text-center'>
          이메일로 인증 링크를 전송하였습니다.
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
              인증 확인하기
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
export default compose(connect(mapStateToProps, actions))(
  withRouter(VerifyEmail)
)
