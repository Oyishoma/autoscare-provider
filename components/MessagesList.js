import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState, useRef} from 'react'
import Message from './Message'

const MessagesList = () => {
    const [messages, setMessages] = useState([
      {
       user: 0, 
       time: '12:00',
       content: 'hey'
      },
      {
        user: 1, 
        time: '12:03',
        content: 'Hi Good Evening'
       }, 
       {
        user: 0, 
        time: '12:11',
        content: 'Can i stay in touch?'
       },
       {
        user: 0, 
        time: '12:12',
        content: "Please respond when you can"
       },
       {
        user: 1, 
        time: '12:15',
        content: "Of course"
       },
       {
        user: 1, 
        time: '12:15',
        content: "I am already wondering why the delay"
       },
       {
        user: 1, 
        time: '12:15',
        content: "What is your status?"
       },
       {
        user: 0, 
        time: '12:17',
        content: "ETA is 10 minutes. Expect me in a bit"
       },
       {
        user: 1, 
        time: '12:18',
        content: "Alright then. Its a blue Corrolla. You'll see me by it with a red shirt"
       },
       {
        user: 0, 
        time: '12:20',
        content: "Got it"
       },
       {
        user: 0, 
        time: '12:2',
        content: "Thanks"
       },
       {
        user: 1, 
        time: '12:12',
        content: "You're welcome"
       },
    ])
    const user = useRef(0)
    const scrollView = useRef()
  return (
    <ScrollView style = {{backgroundColor: '#fff'}}
      ref = {ref => scrollView.current = ref}
      onContentSizeChange= {()=>{
        scrollView.current.scrollToEnd({animated: true})
      }}  
    >
      
        {messages.map((message, index) => (
          <Message 
            key = {index} 
            time = {message.time} 
            isLeft = {message.user !== user.current} 
            message = {message.content}
          />
        ))}
    </ScrollView>
  )
}

export default MessagesList

const styles = StyleSheet.create({})