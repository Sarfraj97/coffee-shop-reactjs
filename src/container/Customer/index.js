import React, { useState, useEffect } from 'react'
import CustomerService from "../../services/customers";
import ListCustomer from './ListCustomer';
import NewCustomer from './NewCustomer';
import {useLocation} from 'react-router-dom';


function Customer() {

  const location = useLocation();
  console.log(location, "customer index page");
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
     
        <div className="row mt-4">
          <div className="col-lg col-md-2">
            <div className='col-md-10'>
            <div class="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search" onChange={inputHandler}/>
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">Search</button>
                </div>
            </div>
              {customers && filteredData.map(customer => {
                return <ListCustomer key={customer.id} customer={customer} invoiceItems={location.state} handleClick={location.handleClick}/>
              })}
            </div>
          </div>
          <div className="col-md-4 bg-gray rounded">
          <div className='p-4'>
            <p className="font-weight-bold fs-3">Create customer</p>
        
            <NewCustomer handleSubmit={handleSubmit} customerObject={customerObject} handleChange={handleChange}/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer