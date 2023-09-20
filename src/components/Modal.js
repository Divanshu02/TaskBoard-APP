import React from 'react'

const Modal = ({taskvalue,modal}) => {
  return (
    <div className="Modal border-2 border-green-900" style={{ color:modal.textColor,visibility:modal.visibility}}>
    <h1>{taskvalue}</h1>
    <h1>Add details</h1>
  </div>
  )
}

export default Modal
