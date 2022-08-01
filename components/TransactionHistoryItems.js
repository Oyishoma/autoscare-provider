import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TransactionHistoryItems = () => {
  return (
    <View style = {styles.transactionHistoryItems}>
            <View>
              <Text style = {styles.transactionHistoryInnerText}>250,000</Text>
              <Text>Bank withdrawal</Text>
            </View>
                <Text style = {{color: 'green', marginLeft: 150, marginTop: 10}}>Completed</Text>   

        </View>    
      
  )
}

const styles = StyleSheet.create({
    transactionHistoryText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
    },
    transactionHistoryItems:{
        flex:0,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    transactionHistoryInnerText: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold'
    }    
})

export default TransactionHistoryItems

