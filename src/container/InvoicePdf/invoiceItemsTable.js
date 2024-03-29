import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableFooter from './InvoiceTableFooter'

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

export default function invoiceItemsTable(props) {

  const { invoiceItems, total } = props;

  return (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        {invoiceItems.map(item => <InvoiceTableRow item={item}/>)}        
        <InvoiceTableFooter total={total} />
    </View>
  )
}
