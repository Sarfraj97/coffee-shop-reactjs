import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function ListItem(props) {
  const item = props.item
  const handleClick = props.handleClick
  return (
    <div className="row py-4 px-2 justify-content-end align-items-center">
      <div className="col-4 text-start">{item.name}</div>
      <div className="col-4 text-center">x{item.quantity}</div>
      <div className="col-4 text-end">${item.price * item.quantity}</div>
      <div className='d-grid gap-2 d-md-flex mt-2 mr-2'>
      <button type="button" className="btn btn-danger btn-sm mr-4"  onClick={() => handleClick("remove_all", item.id, 0)}>remove</button>
      <button
        onClick={() => handleClick("remove", item.id, 1)}
        type="button"
        className="btn"
        data-type="minus"
        data-field="quant[2]"
      >
        <AiOutlineMinusCircle size={25}/>
      </button>
      <button
        onClick={() => handleClick("add", item.id, 1)}
        type="button"
        className="btn"
        data-type="plus"
        data-field="quant[2]"
      >
        <AiOutlinePlusCircle size={25}/>
      </button>      
      </div>
    </div>
  )
}
