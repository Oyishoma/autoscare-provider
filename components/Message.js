import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = ({time, isLeft, message}) => {

  const isOnLeft = type => {
    if (isLeft && type === 'messageContainer') {
      return {
        alignSelf: 'flex-start', 
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 0
      }
    }else if (isLeft  && type === 'message'){
      return {
        color: '#000'
      }
    }else if (isLeft && type === 'time'){
      return {
        color: 'darkgray'
      }
    }else {
      return {
        borderTopRightRadius: 0
      }
    }
  }

  return (
    <View style = {styles.container}>
      <View style = {[styles.messageContainer, isOnLeft('messageContainer')]   }>
        <View style = {styles.messageView}>
          <Text style = {[styles.message, isOnLeft('message')]}> {message}</Text>
        </View>
        <View style = {styles.timeView}>
          <Text style = {[styles.time, isOnLeft('time')]}>{time}</Text>
        </View>
      </View>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 5
  }, 
  messageContainer: {
    backgroundColor: '#3e4095', 
    maxWidth: '80%', 
    alignSelf: 'flex-end', 
    flexDirection: 'row', 
    borderRadius: 10,
    paddingHorizontal: 10, 
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10 
  }, 
  messageView: {
    backgroundColor: 'transparent',
    maxWidth: '80%', 
  }, 
  timeView: {
    backgroundColor: 'transparent', 
    justifyContent: 'flex-end', 
    paddingLeft: 10, 
  }, 
  message: {
    color: 'white', 
    alignSelf: 'flex-start', 
    fontSize: 16, 
  }, 
  time: {
    color: 'lightgray',
    alignSelf: 'flex-end', 
    fontSize: 10
  }
})