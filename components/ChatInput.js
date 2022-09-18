import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const ChatInput = () => {

const [message, setMessages] =  useState('')
  return (
    <View style = {styles.container}>
      <View style = {styles.innerContainer}>
          <View style = {styles.inputAndMic}>
              <TouchableOpacity style = {styles.emoticonBtn}>
                <Icon name = 'emoticon-outline' size = {22} color = 'grey'/>
              </TouchableOpacity>
              <TextInput 
                multiline
                placeholder='Type in your messsage'
                style = {styles.input}
                onChangeText = {text=>setMessages(text)}
                />
                <TouchableOpacity style = {styles.rightIconButton}>
                    <Icon name = 'paperclip' size = {22} color = 'grey'/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.rightIconButton}>
                    <Icon name = 'camera' size = {22} color = 'grey'/>
                </TouchableOpacity>
                
          </View><TouchableOpacity style = {styles.sendButton}>
                    <Icon name = {message ? 'send' : 'send'} size = {22} color = 'white'/>
                </TouchableOpacity>
      </View>

    </View>
  )
}

export default ChatInput

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        backgroundColor: '#eee'
    }, 
    innerContainer: {
        paddingHorizontal: 10, 
        marginHorizontal: 10, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row', 
        paddingVertical: 10, 
    }, 
    inputAndMic: {
        flexDirection: 'row',
        backgroundColor: 'white', 
        flex: 3, 
        marginRight: 10,
        paddingVertical : Platform.OS === "ios" ? 10 : 0, 
        borderRadius: 30, 
        alignItems: 'center', 
        justifyContent: 'space-between' ,   
    },
    input: {
        backgroundColor: 'transparent', 
        paddingLeft: 20, 
        color: '#000', 
        flex: 3, 
        fontSize: 15,
        height: 50, 
        alignSelf: 'center'
    }, 
    rightIconButton: {
        justifyContent: 'center',
        alignItems: 'center', 
        paddingRight: 15, 
        paddingLeft:10, 
        borderLeftWidth: 1, 
        borderLeftColor: '#fff'
    }, 
    emoticonBtn: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingLeft: 10, 
        borderLeftWidth: 1, 
        borderLeftColor: '#fff'
    }, 
    sendButton: {
        backgroundColor: '#3e4095', 
        borderRadius: 50, 
        height: 50, 
        width: 50, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})