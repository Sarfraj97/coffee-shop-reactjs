import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    }
    
  });

export default function invoiceNo(props) {

  const invoiceItems = props.invoiceItems

  return (
    <Fragment>
      <View style={styles.invoiceNoContainer}>
          <Text style={styles.label}>Invoice No:</Text>
          <Text style={styles.invoiceDate}>111222</Text>
      </View >
      <View style={styles.invoiceDateContainer}>
          <Text style={styles.label}>Date: </Text>
          <Text >Date transaction</Text>
      </View >
    </Fragment>    
  )
}
