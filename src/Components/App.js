import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from 'src/actions/auth'
import * as actions_player from 'src/actions/player'
import * as actions_modal from 'src/actions/modal'
import { withRouter } from 'react-router-dom'
import SideNav from './Nav/SideNav'
import RightNav from './Nav/RightNav'
import PlayerBar from './Player/PlayerBar'
import AddSong from './Modal/AddSong'
import EditSong from './Modal/EditSong'
import MovePlaylist from './Modal/MovePlaylist'
import AddPlayList from './Modal/AddPlaylist'
import moment from 'moment'
import Loading from './Loading'
import VerifyEmail from 'src/pages/Auth/VerifyEmail'
import HotKey from './ShortCuts'

class App extends Component {
  disableLayout = ['/forgotpassword', '/signin', '/signup', '/verifyemail']

  state = {
    loading: true
  }

  async componentDidMount() {
    await this.props.checkAuth()
    if (this.props.isAuth) await this.props.getInfo()
    if (this.props.isAuth) await this.props.setPlayList(this.props.token)
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading)
      return (
        <div>
          <Loading
            show={this.state.loading}
            onCancel={() => this.setState({ loading: false })}
          />
        </div>
      )
    if (this.disableLayout.includes(this.props.location.pathname)) {
      return (
        <div id='App' className='bg-gray-10 0 text-gray-700'>
          {this.props.children}
        </div>
      )
    }
    if (!this.props.verified && this.props.isAuth)
      return (
        <div id='App' className='bg-gray-100 text-gray-700'>
          <VerifyEmail />
        </div>
      )
    return (
      <div
        id='App'
        className={`bg-gray-100 text-gray-700`}
        style={{
          filter: `blur(${this.props.modal.on ? '10px' : '0'})`,
          transition: 'filter 200ms ease'
        }}>
        <HotKey />
        <PlayerBar />
        <SideNav data={this.props.auth.info} />
        <AddSong
          onCancel={this.props.closeAllModal}
          visible={this.props.modal.addSong}
          token={this.props.auth.token}
        />
        <AddPlayList
          onCancel={this.props.closeAllModal}
          visible={this.props.modal.addPlayList}
          token={this.props.auth.token}
        />
        <EditSong
          onCancel={this.props.closeAllModal}
          visible={this.props.modal.editSong}
          token={this.props.auth.token}
          info={this.props.modal.editSongInfo}
        />
        <MovePlaylist
          onCancel={this.props.closeAllModal}
          visible={this.props.modal.movePlaylist}
          token={this.props.auth.token}
          info={this.props.modal.movePlaylistInfo}
          playlist={this.props.playlist}
        />
        <div
          style={{ marginLeft: '252px' }}
          className='flex flex-row-reverse h-full'>
          <RightNav style={{ width: '640px' }} />
          <div className='flex-grow'>{this.props.children}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  verified: state.auth.verified,
  token: state.auth.token,
  isAuth: state.auth.isAuthenticated,
  auth: state.auth,
  playlist: state.player.playList,
  modal: {
    addSong: state.modal.addSong,
    addPlayList: state.modal.addPlayList,
    editSong: state.modal.editSong,
    movePlaylist: state.modal.movePlaylist,
    movePlaylistInfo: state.modal.movePlaylistData,
    editSongInfo: state.modal.editSongData,
    on: state.modal.on
  }
})

export default compose(
  connect(mapStateToProps, { ...actions, ...actions_modal, ...actions_player })
)(withRouter(App))
