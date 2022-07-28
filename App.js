import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Navigation from './navigation/Navigation';
import ServiceRegisration from './screens/ServiceRegisration';
import Homescreen from './screens/Homescreen';
import Profile from './screens/Profile';

export default function App() {
  return (
    <Profile/>
      //<Homescreen/>
      //<ServiceRegisration/>
      //<Navigation/>
      //<Login/>
 
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
