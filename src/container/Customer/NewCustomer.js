import React, { useState } from 'react'
import CustomerService from "../../services/customers";

export default function NewCustomer(props) {

  const handleSubmit = props.handleSubmit
  const handleChange = props.handleChange

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" id="customerInputName" name="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={handleChange}/>
            </div>
            <div className="form-group mt-4">
              <label>Address</label>
              <input type="text" className="form-control" id="customerInputAddress" name="address" placeholder="Address" onChange={handleChange}/>
            </div>
            <div className="form-group mt-4">
              <label>City</label>
              <input type="text" className="form-control" id="customerInputCity" name="city" placeholder="City" onChange={handleChange}/>
            </div>
            <div className="form-group mt-4">
              <label>phone number</label>
              <input type="text" className="form-control" id="customerInputPhoneNumber" name="phone_number" placeholder="Phone Number" onChange={handleChange}/>
            </div>
            <div className="form-group mt-4">
              <label>State</label>
              <input type="text" className="form-control" id="customerInputState" name="state" placeholder="State" onChange={handleChange}/>
            </div>
            <div className="form-group mt-4">
              <label>State Code</label>
              <input type="text" className="form-control" id="customerInputStateCode" name="state_code" placeholder="State Code" onChange={handleChange}/>
            </div>
            <div className="form-group mt-4">
              <label>GST No.</label>
              <input type="text" className="form-control" id="customerInputGst" name="gst" placeholder="GST No." onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
          </form>
    </div>
  )
}
