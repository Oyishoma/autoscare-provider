import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import Homescreen from "../screens/Homescreen";
import Recent from '../screens/Recent'
import Earnings from '../screens/Earnings'



//screens
const homeName = 'Home'
const recent = 'Recent'
const earnings = 'Earnings'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  return (
    <Tab.Navigator 
        initialRouteName = {homeName} 
        screenOptions = {({route})=> ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName
                let routeName = route.name

                if (routeName === homeName) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (routeName === recent) {
                  iconName = focused ? 'time-sharp' : 'time-outline' 
              } else if (routeName === earnings) {
                iconName = focused ? 'wallet-sharp' : 'wallet-outline' 
            } 
                return <Ionicons name = {iconName} size = {size} color = {color}/>
            },
            headerShown: false,
            tabBarActiveTintColor: "#3e4095",
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: {
              paddingBottom: 10,
              fontSize: 10
            },
            flex: 1,
            tabBarStyle:{
              height: 70,
              paddingTop: 10,
            }
        })}
        > 
    
      <Tab.Screen name = {recent} component = {Recent} options = {{headerShown: false}} />
      <Tab.Screen name={homeName} component={Homescreen} />
      <Tab.Screen name = {earnings} component = {Earnings} options = {{headerShown: false}}/>

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;