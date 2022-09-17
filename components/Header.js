import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    
    const navigation = useNavigation()

    return (
    
    <SafeAreaView style = {styles.safeAreaView}>
        <View style = {styles.header}>
            <Image 
                source = {require('../assets/logo-plain.png')} 
                style = {{width: 50, height: 40}}
            />
            <View>
                <Text style = {styles.text}>{props.screenTitle}</Text>
            </View>
            <View>
                <TouchableOpacity>
                   <FontAwesome
                name = 'navicon'
                size = {22}
                color = 'grey' 
                onPress={() => navigation.openDrawer()} 
                />
                </TouchableOpacity>
                
            </View>

        </View>  
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    safeAreaView: {
        paddingBottom: 10,
        //flex: 1,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 10,
        marginTop: 40,
        marginBottom: 0
        
    }, 
    text: {
        //margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3e4095'
    }
})

export default Header