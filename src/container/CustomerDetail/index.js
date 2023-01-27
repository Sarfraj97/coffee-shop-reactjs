import React, { useEffect, useState } from 'react'
import CustomerService from "../../services/customers";
import { useLocation, useParams } from 'react-router-dom';
import './style.css'

export default function Index() {

  const location = useLocation();
  const [invoiceItems, setInvoiceItems] = useState(location.state);
  const { id } = useParams();
  // console.log(id);
  const [customer, setCustomer] = useState();

  useEffect(() => {
    CustomerService.get(id).then((customer) => {
      setCustomer(customer)
    });
  }, [])

  const total_price = invoiceItems.length
    ? (invoiceItems.reduce(
        (sum, current) => sum + current.price * current.quantity,
        0
      ))
    : 0;

  const withGst = (total_price/100) * 118

  // console.log(invoiceItems.map((i) => {return i.name}))

  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="row justify-content-center">
              <div className="col-md-6">																
                <div className="invoice-logo"><img width="100" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Invoice logo"/></div>
              </div>												
              <div className="col-lg-6">														
                <div className="invoice-from">
                  <ul className="list-unstyled text-right">
                    <li>Dash LLC</li>
                    <li>2500 Ridgepoint Dr, Suite 105-C</li>
                    <li>Austin TX 78754</li>
                    <li>VAT Number EU826113958</li>
                  </ul>
                </div>
              </div>												
              <div className="col-lg-12">												
                <div className="invoice-details mt25">
                  <div className="well">
                    <ul className="list-unstyled mb0">
                      <li><strong>Invoice</strong> #936988</li>
                      <li><strong>Invoice Date:</strong> Monday, October 10th, 2015</li>
                      <li><strong>Due Date:</strong> Thursday, December 1th, 2015</li>
                      <li><strong>Status:</strong> <span className="label label-danger">UNPAID</span></li>
                    </ul>
                  </div>
                </div>
                <div className="invoice-to mt25">
                  <ul className="list-unstyled">
                    <li><strong>Invoiced To</strong></li>
                    <li>Jakob Smith</li>
                    <li>Roupark 37</li>
                    <li>New York, NY, 2014</li>
                    <li>USA</li>
                  </ul>
                </div>
                <div className="invoice-items">
                  <div className="table-responsive" style={{overflow: "hidden", outline: "none"}} tabIndex="0">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="per70 text-center">Description</th>
                          <th className="per5 text-center">Qty</th>
                          <th className="per25 text-center">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                      {invoiceItems.map((i) => {  
                          return (<tr>
                            <td>{i.name}</td>
                            <td className="text-center">{i.quantity}</td>
                            <td className="text-center">{i.price}x{i.quantity}={i.price * i.quantity}</td>
                          </tr>)  
                      })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan="2" className="text-right">Sub Total:</th>
                          <th className="text-center">{total_price}</th>
                        </tr>
                        <tr>
                          <th colSpan="2" className="text-right">18% GST:</th>
                          <th className="text-center">{ (total_price/100 * 18).toFixed(2) }</th>
                        </tr>                
                        <tr>
                          <th colSpan="2" className="text-right">Total:</th>
                          <th className="text-center">{withGst}</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="invoice-footer mt25">
                  <p className="text-center">Generated on Monday, October 08th, 2015 <a href="#" className="btn btn-default ml15"><i className="fa fa-print mr5"></i> Print</a></p>
                </div>
              </div>												
            </div>
          </div>
        </div>
      </div>      
)}