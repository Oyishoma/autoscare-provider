import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Homescreen from '../screens/Homescreen';
//import Contact from '../screens/Contact';  
import Profile from '../screens/Profile';
import SideBar from '../components/SideBar';
//import Providers from '../screens/Providers';
//import PrivacyPolicy from '../screens/PrivacyPolicy';
//import Feedback from '../screens/Feedback';
//import Contact from '../screens/Contact';
//import About from '../screens/About';
import Inbox from '../screens/Inbox';
import Wallet from '../screens/Wallet';
import Privacy from '../screens/Privacy';
import Feedback from '../screens/Feedback';
import About from '../screens/About';
import Help from '../screens/Help'
import Contact from '../screens/Contact';
import Header from '../components/Header';




const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer >
          <Drawer.Navigator 
            useLegacyImplementation={true}
            drawerContent={(props) => <SideBar {...props}/>} 
            screenOptions={{
              headerShown: false,
              drawerActiveBackgroundColor: '#fff',
              drawerActiveTintColor: "black",
              drawerInactiveTintColor: '#fff',
              drawerLabelStyle: {
              fontSize: 16
              }
            }}>
        
            <Drawer.Screen name="home" component={TabNavigator} options={{ drawerLabel: 'Home' }}/>
            <Drawer.Screen name="Profile" component={Profile}  options={{ drawerLabel: 'Profile' }} />
            {/* <Drawer.Screen name="BecomeAProvider" component={Providers} options={{ drawerLabel: 'BecomeAProvider' }} /> */}
            {/* <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} options={{ drawerLabel: 'Privacy' }}/> */}
            <Drawer.Screen name="Inbox" component={Inbox} options={{ drawerLabel: 'Inbox' }}/>
            <Drawer.Screen name="Wallet" component={Wallet} options={{ drawerLabel: 'Wallet' }}/>
            <Drawer.Screen name="Privacy Policy" component={Privacy} options={{ drawerLabel: 'Privacy Policy' }}/>
            <Drawer.Screen name="Feedback" component={Feedback} options={{ drawerLabel: 'Feedback' }}/>
            <Drawer.Screen name="About" component={About} options={{ drawerLabel: 'About' }}/>
            <Drawer.Screen name="Contact" component={Help} options={{ drawerLabel: 'Contact' }}/>
            {/* <Drawer.Screen name="About" component={About} options={{ drawerLabel: 'About' }}/> */}
            {/* <Drawer.Screen name="Contact Us" component={Contact}  options={{ drawerLabel: 'Contact Us' }}/> */}
  
          </Drawer.Navigator>
        </NavigationContainer>
      );
}

export default DrawerNavigator

const styles = StyleSheet.create({})