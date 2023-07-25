import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
  });


  export default function invoiceBillTo(props) {
    // console.log("props", props.customer.name);
    // const customer_name = props.customer.name
    const { customer } = props


    return (
      <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To: {customer.name}</Text>        
        <Text>Address: {customer.address}</Text>
        <Text>Phone: {customer.phone}</Text>
        <Text>Email: {}</Text>
    </View>
    )
  }