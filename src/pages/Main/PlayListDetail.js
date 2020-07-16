import React, { Component } from 'react'
import Container from 'src/components/Layout/Container'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from 'src/actions/auth'
import SongList from 'src/components/Player/SongList'
import queryString from 'query-string'

class Home extends Component {
  state = {
    value: 0,
    info: {},
    loading: true
  }

  componentDidMount() {
    this.setData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.setData(nextProps)
  }

  setData = (data) => {
    this.setState({ loading: true })
    const query = queryString.parse(data.location.search)
    const id = parseInt(query.id)
    const index = data.playList.findIndex((i) => i.ID === id)
    if (index < 0) {
      data.history.push('/')
      return
    }
    this.setState({ info: data.playList[index], loading: false })
  }

  render() {
    if (this.state.loading) return <Container title='PlayList'></Container>
    return (
      <Container title='PlayList'>
        <SongList
          url={`/play/list/detail?target=${this.state.info.ID}`}
          listname={this.state.info.ID}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  playList: state.player.playList
})

export default compose(connect(mapStateToProps, actions))(withRouter(Home))
