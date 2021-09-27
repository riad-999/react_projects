import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {loading,page,nbPages,handlePage} = useGlobalContext();

  return <div className="btn-container">
    <button type="button" disabled={loading}
    onClick={() => handlePage('dec')}>
      prev
    </button>
    <p>
      {page + 1} of {nbPages}
    </p>
    <button type="button" disabled={loading}
    onClick={() => handlePage('inc')}>
      next
    </button>
  </div> 
}

export default Buttons
