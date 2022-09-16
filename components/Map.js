import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const Map = () => {
  return (
    <MapView style = {styles.mapView}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  )
}

export default Map

const styles = StyleSheet.create({ 
    mapView: {
       // flex: 1,
        height: '100%',
    }
})