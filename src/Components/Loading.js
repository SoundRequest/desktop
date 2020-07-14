import React from 'react'
import styles from '../assets/styles/loading.module.css'
import Modal from 'react-modal'

const customStyles = {
  content: {}
}
Modal.setAppElement('body')

export default ({ show, onCancel }) => {
  return (
    <Modal isOpen={show} onRequestClose={onCancel} style={customStyles}>
      <div id={styles.page_loading}>
        <div className={styles.three_balls}>
          <div
            className={`${styles.ball} ${styles.ball1}`}
            style={{ marginRight: '8px' }}></div>
          <div className={`${styles.ball} ${styles.ball2}`}></div>
          <div className={styles.ball} style={{ marginLeft: '8px' }}></div>
        </div>
      </div>
    </Modal>
  )
}
