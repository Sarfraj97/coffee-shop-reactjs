import React from 'react'

export default function ListItem(props) {
  const item = props.item
  const handleClick = props.handleClick
  return (
    <div className="row py-4 px-2 justify-content-end align-items-center">
      <div className="col-4 text-start">{item.name}</div>
      <div className="col-4 text-center">x{item.quantity}</div>
      <div className="col-4 text-end">${item.price * item.quantity}</div>
      <div className='d-grid gap-2 d-md-flex mt-2 mr-2'>
      <button type="button" className="btn btn-danger btn-sm mr-4"  onClick={() => handleClick(item.id, '0')}>remove</button>           
      </div>
    </div>
  )
}
