import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Contact = () => {
  return (
    <SafeAreaView>
      <View style = {styles.container}>
        <Header screenTitle = 'Contact Us'/>
      </View>
    
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

})

export default Contact

