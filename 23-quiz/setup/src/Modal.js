import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen,closeModal,correct} = 
  useGlobalContext();
  return <div className={isModalOpen ? 
  'modal-container isOpen' : 'modal-container' }>
    <div className="modal-content">
      <h2>congrats</h2>
      <p>you answered {correct} of questions correctly</p>
      <button className="close-bnt"
       onClick={closeModal} className="close-btn">
        play again
      </button>
    </div>
  </div>
}

export default Modal
