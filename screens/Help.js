import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Inputs from '../components/Inputs'
import Account from '../components/Account'
import Submit from '../components/Submit'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { Input } from 'react-native-elements'

const Help = () => {
  return (
  <View>

    <Header screenTitle = 'Help Center' /> 

    <View style = {styles.container}>
        <Inputs name = "Your name"  />
        <View><Text> </Text></View>
        <Inputs name = "Your email"/>
        <View><Text> </Text></View>

        <View style = {styles.commentContainer}> 
          <TextInput 
            multiline 
            placeholder = 'Tap here to start typing .' 
            style ={[styles.comment]}
          />
        </View>
        
        <View style = {styles.submitBtn}>
          <Submit title = 'Log In' color = '#3e4095'/>
        </View>

        <View>
          <View style = {styles.contactvia}><Text>Or contact us via:</Text></View>
          <View style = {{flexDirection: 'row', marginTop: 20}}>
          
          <FontAwesome name="facebook-square" size={60} color="#3b5998" />
          <Text> {' '}</Text><Text> {' '}</Text>
          <FontAwesome name="twitter" size={60} color="#00acee" />
          <Text> {' '}</Text><Text> {' '}</Text>
          <FontAwesome name="linkedin-square" size={60} color="#0072b1" />
          <Text> {' '}</Text><Text> {' '}</Text>
          <MaterialCommunityIcons name="gmail" size={60} color="#ea4335" />
        </View>

        
        </View>
    </View>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center'
  },
  commentContainer: {
    paddingTop: 5,
    alignItems: 'center',
    width: '90%',
    elevation: 5,
    backgroundColor: 'white',
    height: 350,
    //margin: 10
  },
  comment: {
    paddingTop: 10,
    width: '90%',
    color:'#0779e4',
    fontWeight: 'normal',
    fontSize: 20, 
    marginLeft: 5,
  },  
  submitBtn: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center'
  },
  contactvia: {
    fontSize: 20,
    marginTop: 20,
    alignItems: 'center'
  }, 

})