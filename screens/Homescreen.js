import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
//import MapView from 'react-native-maps';

const Homescreen = () => {
  return (
    <View style = {styles.component}>
     <Header screenTitle = 'AUTOS CARE' />  
     <View>
       <Map/>
     </View>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'white'
  }
  
})