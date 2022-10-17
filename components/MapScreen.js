import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'

const URL = 'http://api.positionstack.com/v1/forward?access_key='
const access_key = '4bcaa54340d68c6a4e6ff660daeaaca3'

export default function MapScreen({route}) {

  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    console.log("Place: " + route.params?.destination)
    fetch(URL + access_key + `&query=${route.params?.destination}` )
    .then(response => response.json())
    .then(res => {
      console.log(res.data[0].latitude)
      console.log(res.data[0].longitude)
      setLat(res.data[0].latitude)
      setLng(res.data[0].longitude)
      setIsLoaded(true)
    }, (error) => {
      console.log(error)
    })
  }, [route.params?.destination])

  if(!isLoaded){
    return (
      <View>
        <Text>Retrieving location...</Text>
        <ActivityIndicator size="large" animating={true} />
      </View>
    )
  } else {
  return (
    <MapView 
      style={styles.map}
      initialRegion={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 1.0922,
        longitudeDelta: 1.0421 
      }}
    >
      <Marker
        title={route.params?.destination.toString()}
        coordinate={{latitude: lat, longitude: lng}}
      />
    </MapView>
  )
}
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})