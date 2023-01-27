import React, { useState, useEffect } from 'react'
import CustomerService from "../../services/customers";
import ListCustomer from './ListCustomer';
import NewCustomer from './NewCustomer';
import {useLocation} from 'react-router-dom';


function Customer() {

  const location = useLocation();
  const [customerObject, setCustomerObject] = useState({})
  const [customers, setCustomers] = useState([])
  const [inputText, setInputText] = useState("");
  const [customerAdded, setCustomerAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    CustomerService.create(customerObject).then(res => {
      console.log("created successfully");
      setCustomerAdded(true)
    })
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomerObject({ ...customerObject, [e.target.name]: value })
  }

  useEffect(() => {
    CustomerService.getAll().then((customers) => {
      setCustomers(customers)
    });
  }, [customerAdded]);

  const filteredData = customers.filter((el) => { 
    if (inputText === '') {
       return el;
    } 
    else { 
      return el.name.toLowerCase().includes(inputText.toLowerCase())      
    } 
  })

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value;
    setInputText(lowerCase);
  };
  

  return (
    <>
      <div className="container">
        <h2 className="mt-5">Customer</h2>
        <input type="text" className="" placeholder="search" onChange={inputHandler}/>
        <div className="row">
          <div className="col-lg col-md-2">
            <div className='col-md-10'>
              {customers && filteredData.map(customer => {
                return <ListCustomer key={customer.id} customer={customer} invoiceItems={location.state}/>
              })}
            </div>
          </div>
          <div className="col-md-4">
          <div>
            <p className="font-weight-bold fs-3">Create customer</p>
          </div>
            <NewCustomer handleSubmit={handleSubmit} customerObject={customerObject} handleChange={handleChange}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer