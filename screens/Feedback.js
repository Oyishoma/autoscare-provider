import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FontAwesome } from '@expo/vector-icons'
import Submit from '../components/Submit'

const Feedback = () => {
  return (
    <View style = {styles.container}>
       <Header screenTitle = 'Feedback' /> 

       <View>
         <Text style = {styles.ratingsText}>Enjoying AutosCare? Please rate us</Text>  
       </View>

       <View style = {styles.ratingsContainer}>
              <FontAwesome name="star" size={40} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={40} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={40} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={40} color="#FFBF00" />
              <Text> {' '}</Text>
              <FontAwesome name="star" size={40} color="#FFBF00" />
       </View>

        <View style = {styles.ratingsContainer}> 
          <Text style = {styles.ratingsText}> Do you have any comment or suggestions on how we can improve our app? We would like to know. 
            Please leave it in the comment box below.
          </Text>
        </View>

        <View style = {styles.feedbackContainer}> 
          <TextInput 
            multiline 
            placeholder = 'Tap here to start typing .' 
            style ={[styles.comment]}
          />
        </View>

        <View style = {styles.submitBtn}>
          <Submit title = 'Submit' color = '#3e4095'/>
        </View>
        
       
    </View>
  )
}

export default Feedback

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
    ratingsText: {
        fontSize: 20,
        width: '90%',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center'
        
    },
    ratingsContainer: {
        flex: 0, 
        flexDirection: 'row', 
        marginTop: 30,
        marginBottom: 30,
        alignSelf: 'center'
      },
      feedbackContainer: {
        paddingTop: 5,
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        elevation: 5,
        backgroundColor: 'white',
        height: 350,
      }, 
      comment: {
        paddingTop: 10,
        width: '90%',
        color:'#000',
        fontWeight: 'normal',
        fontSize: 20, 
        marginLeft: 5,
      },

      submitBtn: {
        marginTop: 30,
        alignItems: 'center'
      }
})