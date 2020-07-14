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
    value: 0
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

  render() {
    return (
      <Container title='Settings'>
        <div className=''>
          <this.renderCategory name={'계정'}>
            <div className='w-full mb-24 align-middle mt-4'>
              <div className='setting__account__warning mb-2'>
                {/* <div className='ml-3 text-gray-700 font-medium text-red-500'>
                  <FontAwesomeIcon icon={faExclamationTriangle} className='text-xl my-auto mr-1' />
                  일부 계정 정보를 수정하려면, 본인인증을 해야 할 수도 있습니다.
                </div> */}
                <div
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
                </div>
              </div>
              <div className='ml-3 text-gray-700 font-medium'>이메일 변경</div>
              <div className='ml-3'>
                <Input
                  type='email'
                  placeholder='이메일'
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className='ml-3 text-gray-700 font-medium'>닉네임 변경</div>
              <div className='ml-3'>
                <Input
                  type='nickname'
                  placeholder='유저이름'
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
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
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

export default compose(connect(mapStateToProps, actions))(withRouter(Settings))
