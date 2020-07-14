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

class AddPlaylist extends React.Component {
  state = {
    name: '',
    description: '',
    errorMsg: ''
  }

  onFinish = () => {
    const { name, description } = this.state
    const noAirName = name.trim()
    const noAirDesc = description.trim()

    if (!noAirName) {
      this.setState({ errorMsg: '모든 향목을 채워주세요' })
    } else {
      Axios.post(
        `${config.baseurl}/play/list`,
        {
          name: noAirName,
          description: noAirDesc,
          public: false
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

  render() {
    return (
      <Modal
        isOpen={this.props.visible}
        onRequestClose={this.props.onCancel}
        style={customModalStyles}>
        <div className='text-xl mb-4 font-bold'>플레이리스트 추가</div>
        <div className='md:flex md:items-center mt-6 mb-4'>
          <Input
            type='title'
            placeholder='플레이리스트 이름'
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className='md:flex md:items-center mb-4'>
          <textarea
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            placeholder={'설명'}
            value={this.state.description}
            maxLength={1000}
            rows={4}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
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

export default AddPlaylist
