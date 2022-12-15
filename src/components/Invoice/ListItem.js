import React from 'react'

export default function ListItem(props) {
  const item = props.item
  return (
    <div className="row py-4 px-2 justify-content-end align-items-center">
      <div className="col-4 text-start">{item.name}</div>
      <div className="col-4 text-center">x{item.quantity}</div>
      <div className="col-4 text-end">${item.price * item.quantity}</div>
    </div>
  )
}
