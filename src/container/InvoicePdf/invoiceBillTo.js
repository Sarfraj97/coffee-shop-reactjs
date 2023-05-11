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
    console.log("props", props.customer.name);
    // const customer_name = props.customer.name
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To: {props.customer.name}</Text>
        <Text>company</Text>
        <Text>address</Text>
        <Text>invoice.phone</Text>
        <Text>invoice.email</Text>
    </View>
    )
  }