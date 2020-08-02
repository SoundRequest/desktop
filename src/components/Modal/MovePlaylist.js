import React from 'react'
import Modal from 'react-modal'
import Input from 'src/components/FormItem/Input'
import Axios from 'axios'
import config from 'src/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '301',
    borderRadius: '0.75rem',
    padding: '30px',
    width: '500px'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: '300'
  }
}
Modal.setAppElement('body')

class MovePlaylist extends React.Component {
  state = {
    selected: '-1',
    target: -1,
    errorMsg: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.info.id < 1 || this.state.disableGetData) {
      return
    }
    const { id } = nextProps.info
    this.setState({ target: id, disableGetData: true })
  }

  onFinish = () => {
    const { selected } = this.state

    if (selected === '-1') {
      this.setState({ errorMsg: '향목을 선택해주세요' })
    } else {
      Axios.post(
        `${config.baseurl}/play/bridge/list`,
        {
          item: this.props.info.id,
          target: parseInt(selected)
        },
        {
          headers: {
            Authorization: 'Bearer ' + this.props.token
          }
        }
      )
        .then((res) => {
          this.props.onCancel()
          window.location.reload()
        })
        .catch((err) => {
          this.setState({ errorMsg: `Error: ${err}` })
        })
    }
  }

  onCancel = () => {
    this.setState({ disableGetData: false }, () => {
      this.props.onCancel()
    })
  }

  render() {
    return (
      <Modal
        isOpen={this.props.visible}
        onRequestClose={this.onCancel}
        style={customModalStyles}>
        <div className='text-xl mb-4 font-bold'>플레이리스트에 추가</div>
        <div className='md:flex md:items-center mt-6 mb-4'>
          <div className='inline-block relative w-64'>
            <select
              value={this.state.item}
              onChange={(e) => this.setState({ selected: e.target.value })}
              className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
              <option value={'-1'}>선택하여 주세요</option>
              {this.props.playlist.map((item) => (
                <option key={item.ID} value={item.ID}>
                  {item.Name}
                </option>
              ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                class='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        {this.state.errorMsg ? (
          <div className='text-center mb-3 text-red-500'>
            {this.state.errorMsg}
          </div>
        ) : (
          <div className='h-4'></div>
        )}
        <div className='flex justify-between'>
          <div></div>
          <button
            className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-24 rounded-full'
            onClick={this.onFinish}
            type='button'>
            등록
          </button>
        </div>
      </Modal>
    )
  }
}

export default MovePlaylist
