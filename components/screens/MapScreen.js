import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'

const URL = 'http://api.positionstack.com/v1/forward?access_key='
const ACCESS_KEY = 'Your access key here...'

export default function MapScreen({route}) {

  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(URL + ACCESS_KEY + `&query=${route.params?.destination}` )
    .then(response => response.json())
    .then(res => {
      setLat(res.data[0].latitude)
      setLng(res.data[0].longitude)
      setIsLoaded(true)
    }, (error) => {
      alert('something went wrong..')
      console.log(error)
    })
  }, [route.params?.destination])


  if(!isLoaded){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Retrieving location...</Text>
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
  },
  container: {
    flex: 1,
    backgroundColor: '#edeff5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#031073',
    marginBottom: 2
  }
})