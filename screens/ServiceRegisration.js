import { StyleSheet, Text, View,Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Inputs from '../components/Inputs'
import Submit from '../components/Submit'


const ServiceRegisration = () => {
  return (
    <SafeAreaView >
    <View style = {styles.container}>
        <View style = {styles.headerStyle}>
           <Header screenTitle = 'Service Registration' /> 
        </View>
        
        <View style = {styles.bio}>
        <Text style = {styles.title}>Upload Your Picture </Text>
            <Image source={require('../assets/user_image.jpg')} style = {styles.profileImage}/>
            <View style = {styles.providerData} >
            <View><Text> </Text></View>
                <Inputs name = "Enter Business Name" icon = "briefcase" style = {styles.inputStyles}/>
                <View><Text> </Text></View>
                <Inputs name = "Choose Service" icon = "chevron-circle-down"/>
                <View><Text> </Text></View>
                <Inputs name = "Category" icon = "chevron-circle-down"/>
                <View><Text> </Text></View>
                <Inputs name = "Registration Code" icon = "lock"/>
                <View><Text> </Text></View>
            </View>
            
            <Submit style = {{alignSelf: 'center'}}title = 'Submit' color = '#3e4095'/>
        </View>
        
    </View>
    </SafeAreaView>
  )
}

export default ServiceRegisration

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff'
      },
      bio: {
        width: undefined,  
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
        
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
      },
      profileImage: {
        width: 150,
        height: 150, 
        borderRadius: 40,
        borderWidth: 3, 
        borderColor: '#fff',
        marginBottom: 10
      }, 
      providerData: {
        width: '100%',  
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10, 
      },
      headerStyle: {
        paddingTop:10
      }

})