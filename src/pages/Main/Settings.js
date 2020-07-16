import React, { Component } from 'react'
import Container from 'src/components/Layout/Container'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from 'src/actions/auth'
import Switch from 'src/components/FormItem/Switch'
import Input from 'src/components/FormItem/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

class Settings extends Component {
  state = {
    value: 0,
    email: '',
    name: '',
    originPswd: '',
    newPswd: '',
    newPswdConf: ''
  }

  renderCategory = ({ name, children }) => {
    return (
      <div className='setting__appearance text-gray-900 font-bold text-2xl'>
        {name}
        <div className='setting__appearance__content text-lg border-t-2 mb-4'>
          {children}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.getProps(this.props.info)
  }

  getProps = (info) => {
    const { email, name } = info
    this.setState({ email, name })
  }

  signOut = () => {
    this.props.signOut()
    window.location.reload()
  }

  componentWillReceiveProps(nextProps) {
    this.getProps(nextProps.info)
  }

  handleChangeUserInfo() {}

  handleChangePassword() {}

  render() {
    return (
      <Container title='Settings'>
        <div className=''>
          <this.renderCategory name={'계정'}>
            <div className='w-full mb-18 align-middle mt-4'>
              <div className='setting__account__warning mb-2'>
                {/* <div
                  className='flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3'
                  role='alert'>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className='text-xl my-auto mr-1'
                  />
                  <p>
                    일부 계정 정보를 수정하려면, 본인인증을 해야 할 수도
                    있습니다.
                  </p>
                </div> */}
              </div>
              <div className='grid grid-cols-2 grid-flow-col col-gap-4'>
                <div className='col-span-1'>
                  <div className='ml-3 text-gray-700 font-medium'>
                    이메일 변경
                  </div>
                  <div className='ml-3 mb-2'>
                    <Input
                      type='email'
                      placeholder='이메일'
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className='ml-3 text-gray-700 font-medium'>
                    닉네임 변경
                  </div>
                  <div className='ml-3 mb-4'>
                    <Input
                      type='text'
                      placeholder='유저이름'
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>
                </div>
                <form
                  className='col-span-1'
                  onSubmit={this.handleChangePassword}>
                  <div className='ml-3 text-gray-700 font-medium'>
                    원래 비밀번호
                  </div>
                  <div className='ml-3 mb-2'>
                    <Input
                      type='password'
                      value={this.state.originPswd}
                      onChange={(e) =>
                        this.setState({ originPswd: e.target.value })
                      }
                    />
                  </div>
                  <div className='ml-3 text-gray-700 font-medium'>
                    바꿀 비밀번호
                  </div>
                  <div className='ml-3 mb-2'>
                    <Input
                      type='password'
                      value={this.state.newPswd}
                      onChange={(e) =>
                        this.setState({ newPswd: e.target.value })
                      }
                    />
                  </div>
                  <div className='ml-3 text-gray-700 font-medium'>
                    바꿀 비밀번호 확인
                  </div>
                  <div className='ml-3 mb-4'>
                    <Input
                      type='password'
                      value={this.state.newPswdConf}
                      onChange={this.handleChange}
                      onChange={(e) =>
                        this.setState({ newPswdConf: e.target.value })
                      }
                    />
                  </div>
                  <div className='flex flex-row-reverse'>
                    <button
                      className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
                      type='submit'>
                      제출
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </this.renderCategory>
          <this.renderCategory name={'외관'}>
            <div className='flex w-full mb-24 align-middle mt-4'>
              <div className='ml-3 text-gray-700 font-medium'>
                다크모드 (추가예정)
              </div>
              <Switch />
            </div>
          </this.renderCategory>
          <this.renderCategory name={'위험구역'}>
            <div className='flex mt-4'>
              <button
                onClick={this.signOut}
                className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>
                로그아웃
              </button>
            </div>
          </this.renderCategory>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  info: state.auth.info
})

export default compose(connect(mapStateToProps, actions))(withRouter(Settings))
