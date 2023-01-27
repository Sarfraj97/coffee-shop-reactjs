import React from 'react'
import { useNavigate } from "react-router";
import "./style.css"

export default function ListCustomer(props) {
  const customer = props.customer
  const invoiceItems = props.invoiceItems
  const navigate = useNavigate()
  
  return (
    <div className="row py-4 border-bottom align-items-center px-2 overflow-auto" id="customer-detail" onClick={() => navigate(`/customer/${customer.id}`, {state: invoiceItems})}>
      <div className="col-4">{customer.name}</div>
      <div className="col-4 text-center">{customer.price}</div>
    </div>
  )
}
