import React from 'react'
import './index.css'
import  ReactDOM  from 'react-dom'
export default function Modal({children, danger=false}) {
  return (
    ReactDOM.createPortal(
    <div className='modal-components'>
        <div className='modal-backdrop'>
      <div className='modal' style={{ 
        border: '2px solid',
        borderColor : danger ? 'red' : 'blue',
       }}>
          {children}
      </div>
    </div>
    </div>
, document.getElementById('modal'))
    
  )
}
