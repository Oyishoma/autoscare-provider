import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import { useNavigation } from '@react-navigation/native';
//import ChatHeader from '../components/ChatHeader'
import ChatInput from '../components/ChatInput'
import MessagesList from '../components/MessagesList'
import Header from '../components/Header'

const Inbox = ({navigation, route }) => {
  const username  = route.params
  const bio = route.params
  const picture = route.params
  const isBlocked = route.params
  const isMuted = route.params     

  return (
    <View style = {styles.container}>
      <Header screenTitle = 'Inbox' style = {styles.headerBackground} />
      <MessagesList/>
      <ChatInput/>
    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }, 
  headerBackground: {
    backgroundColor: '#fff'
  }
})