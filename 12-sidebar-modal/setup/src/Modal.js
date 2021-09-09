import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobal } from './context'

const Modal = () => {
  
  const {close_modal,is_modal} = useGlobal();
  return <div 
  className={is_modal ? 'modal-overlay show-modal'
   : 'modal-overlay'}
  >
    <div className="modal-container">
      <h3>modal content</h3>
      <button className="close-modal-btn" onClick={close_modal}>
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
