import React from 'react'
import './index.css'
import  ReactDOM  from 'react-dom'
export default function Modal({children, danger=false, setshowModal}) {
  let className = danger ? 'border-red' : 'border-blue';
  return (
    ReactDOM.createPortal(
    <div className='modal-components'>
        <div className='modal-backdrop'>
      <div className={`modal ${className}`}>
          {children}
          <button onClick={()=>setshowModal(false)}>close</button>
      </div>
    </div>
    </div>
, document.getElementById('modal'))
    
  )
}
