import React, { useEffect, useState, Fragment } from 'react'
import CustomerService from "../../services/customers";
import { useLocation, useParams } from 'react-router-dom';
import './style.css'
import { PDFViewer, Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from '../InvoicePdf/invoiceTitle';
import BillTo from '../InvoicePdf/invoiceBillTo';
import InvoiceNo from '../InvoicePdf/invoiceNo'
import InvoiceItemsTable from '../InvoicePdf/invoiceItemsTable'
import InvoiceThankYouMsg from '../InvoicePdf/invoiceThankYouMsg'
import logo from '../../../src/avatar7.png'

export default function Index(props) {
  
  const location = useLocation();
  console.log(props, "customers detail page")
  const [invoiceItems, setInvoiceItems] = useState(location.state);
  const { id } = useParams();
  // console.log(id);
  const [customer, setCustomer] = useState({});
  const handleClick = location.handleClick

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

  const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    viewer: {
      width: '100%',
      height: '75rem'
    },
    fragment: {
      display:'flex',
    }
  });

  return (
    <div className='container-fluid'>
    <div className='row'>    

    <div className='col-md-8'>
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            {customer.name !== 'random' && <Image style={styles.logo} src={logo} />}
            {customer.name !== 'random' && <InvoiceTitle title='Invoice' />}
            {customer.name !== 'random' && <InvoiceNo invoiceItems={invoiceItems} />}
            {customer.name !== 'random' && <BillTo invoiceItems={invoiceItems} customer={customer} />}
            <InvoiceItemsTable invoiceItems={invoiceItems} total={total_price} />
            <InvoiceThankYouMsg />
          </Page>
        </Document>
      </PDFViewer>   
    </div> 
    </div>  
    </div>    
)}