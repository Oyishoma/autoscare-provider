import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Navigation from './navigation/Navigation';
import ServiceRegisration from './screens/ServiceRegisration';
import Homescreen from './screens/Homescreen';
import Profile from './screens/Profile';
import Help from './screens/Help';
import Feedback from './screens/Feedback';
import Wallet from './screens/Wallet';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <DrawerNavigator/>
    //<Wallet/> 
    //<Profile/>
    //<Help/>
      //<Homescreen />
      //<ServiceRegisration/>
      //<Navigation/>
      //<Login/>
    //<Feedback/> 
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
