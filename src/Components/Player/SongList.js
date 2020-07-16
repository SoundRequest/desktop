import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import config from '../../config'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions/player'
import * as actions_modal from '../../actions/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faTrashAlt,
  faExpandAlt
} from '@fortawesome/free-solid-svg-icons'

import Axios from 'axios'

createTheme('songlist', {
  background: {
    default: 'rgba(0, 0, 0, 0)'
  },
  divider: {
    default: 'rgba(0,0,0,.0)'
  },
  highlightOnHover: {
    default: '#fefefe',
    text: 'rgba(0, 0, 0, 0.87)'
  }
})

const customStyles = {
  rows: {
    style: {
      // minHeight: '72px' // override the row height
      backgroundColor: '#ffffff',
      marginTop: 5,
      marginBottom: 5,
      boxShadow:
        'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius: '0.375rem'
    }
  }
}

class SongList extends React.Component {
  state = { list: [], url: '' }
  async componentDidMount() {
    this.loadSong(this.props.url)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.url !== nextProps.url) {
      this.loadSong(nextProps.url)
    }
  }

  loadSong = async (url) => {
    const res = await Axios.get(`${config.baseurl}${url}`, {
      headers: {
        Authorization: 'Bearer ' + this.props.token
      }
    })
    console.log('loaded ', url)
    this.setState({ list: res.data.list, url: url })
  }

  handlePlaySong = (link, name, ID) => {
    const listname = this.props.listname
    if (this.props.listname !== listname)
      this.props.setList(listname, this.state.list)
    this.props.setUrl(link, name, ID)
  }

  columns = [
    {
      name: '이름',
      selector: 'Name',
      cell: (row) => (
        <div
          onClick={() => this.handlePlaySong(row.Link, row.Name, row.ID)}
          style={{ cursor: 'pointer' }}>
          {row.Name}
        </div>
      )
      // sortable: true
    },
    {
      name: '설명',
      selector: 'Description'
    },
    {
      name: '',
      cell: (row) => (
        <div className='flex'>
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() =>
              this.props.editSongModal({
                name: row.Name,
                link: row.Link,
                description: row.Description,
                target: row.ID
              })
            }
          />
          <FontAwesomeIcon
            icon={faExpandAlt}
            onClick={() => this.props.movePlaylistModal(row.ID)}
            className='ml-3'
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() =>
              Axios.delete(`${config.baseurl}/play/?target=${row.ID}`, {
                headers: {
                  Authorization: 'Bearer ' + this.props.token
                }
              })
                .then(() => window.location.reload())
                .catch((e) => console.log(e))
            }
            className='mx-3'
          />
        </div>
      ),
      allowOverflow: true,
      button: true
    }
  ]

  render() {
    return (
      <div>
        <DataTable
          title='SongList'
          columns={this.columns}
          customStyles={customStyles}
          data={this.state.list}
          theme='songlist'
          highlightOnHover
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  listname: state.player.listname
})

export default compose(
  connect(mapStateToProps, { ...actions, ...actions_modal })
)(SongList)
