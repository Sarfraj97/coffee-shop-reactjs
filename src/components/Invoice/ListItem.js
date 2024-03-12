import React from 'react'
import TrashIcon from '../../svg/trash'

export default function ListItem(props) {  
  const { item, handleClick, handlePriceChange } = props

  return (
    <div className="row py-4 px-2 justify-content-between align-items-center">
      <div className="col-3 text-start">{item.name}</div>
      <div className="col-3 text-center">x{item.quantity}</div>
      <div className="col-3 text-end">
        Rs.{item.price * item.quantity}
      </div>
      <div className='col-3  d-flex mt-2 justify-content-end'>
      <button type="button" className="btn btn-danger btn-sm mr-4"  onClick={() => handleClick(item.id, 0)}>
        <TrashIcon/>
      </button>          
      </div>
    </div>
  )
}
