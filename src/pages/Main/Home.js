import React, { Component } from 'react'
import Container from 'src/components/Layout/Container'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from 'src/actions/auth'
import SongList from 'src/components/Player/SongList'

class Home extends Component {
  state = {
    value: 0
  }
  render() {
    return (
      <Container title='Home'>
        <SongList url='/play/' listname='-1' />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

export default compose(connect(mapStateToProps, actions))(withRouter(Home))
