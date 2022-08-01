import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Submit from '../components/Submit'
import TransactionHistoryItems from '../components/TransactionHistoryItems'

const wallet = () => {
  return (
    <View style = {styles.container}>

      <Header screenTitle = 'Wallet' /> 

      <View style = {styles.balanceContainer}>
        <View>
          <Text style = {styles.availableBalanceText}> Available Balance</Text>  
        </View>
        <View>
          <Text style = {styles.balanceText}> NGN 150,000</Text>  
        </View>     
      </View>

      <View style = {styles.button}> 
      <Submit title = 'Transfer to Bank' color = '#3e4095' />
      </View> 
      
      <View style = {styles.transactionHistoryContainer}>
        <View>
            <Text style = {styles.transactionHistoryText}>Transaction History</Text>
        </View>   
        <TransactionHistoryItems/>
        <TransactionHistoryItems/>
        <TransactionHistoryItems/>
        <TransactionHistoryItems/>
        <TransactionHistoryItems/>
        <TransactionHistoryItems/>
        <TransactionHistoryItems/>
        

      </View>
    </View>
  )
}

export default wallet

const styles = StyleSheet.create({
    container: {
        //flex: 1, 
    },
    balanceContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,
        width: '90%',
        borderRadius: 15,
        marginBottom: 20,
        elevation: 5,
    },
    availableBalanceText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    balanceText: {
        fontWeight: 'bold',
        fontSize: 40
    }, 
    button: {
        alignItems: 'center', 
        marginBottom: 20,
    },
    transactionHistoryContainer: {
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingTop: 10,
        width: '90%',
        borderRadius: 15,
        elevation: 5,
    },
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
        fontSize: 18,
        fontWeight: 'bold'
    }

    

})