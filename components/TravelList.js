import { View, Text, Button, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { parseString } from 'react-native-xml2js'
import uuid from 'react-native-uuid'
import styles from '../Styles'

const URL = 'https://api.finavia.fi/flights/public/v0/flights/dep/'
export default function TravelList({navigation, route}) {
    const [flights, setFlights] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(URL + route.params?.airport, {
            method: 'GET',
            headers: {
                'app_id' : '88a17a43',
                'app_key' : '6dd228e624ccc4059f5583ee7d612de3'
            }
        })
        .then(response => response.text())
        .then((responseText) => {
            parseString(responseText, function(err, result){
                console.log(JSON.stringify(result))
                //setTitle(result.flights.dep[0].body[0].flight[0].h_apt)
                setError(null)
                setFlights(result.flights.dep[0].body[0].flight)
                setIsLoaded(true)
                console.log("DEBUG: " + JSON.stringify(result.flights.dep[0].body[0].flight[0].h_apt))
            })
        })
        .catch((error) => {
            console.log(error)
            setError(error)
            setFlights([])
            setIsLoaded(true)
        }) 
    }, [])

  if(error){
    return (
        <View style={styles.container}>
            <Text>{error.message}</Text>
        </View>
    )
  } else if (!isLoaded){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Retrieving flights...</Text>
            <ActivityIndicator size='large' animating={true} />
        </View>
    )
  } else {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            {flights.map(flight => (
                <View style={styles.flightInfoBox} key={uuid.v4()}>
                    <Text style={styles.flightInfoTitle}>Flight {flight.fltnr}</Text>
                    <Text style={styles.flightInfoText}>Departure date: {flight.sdt.toString().slice(0,10)}</Text>
                    <Text style={styles.flightInfoText}>Departure time: {flight.sdt.toString().slice(11)}</Text>
                    <Text style={styles.flightInfoText}>Departure airport: {flight.h_apt}</Text>
                    <Text style={styles.flightInfoText}>Destination: {flight.route_1} / {flight.route_n_1}</Text>
                    <Text style={styles.flightInfoText}>Departure gate: {flight.gate}</Text>
                    <Button title="Show destination on map" onPress={() => navigation.navigate('TravelMap', {destination : flight.route_n_1})}/>
                </View>
            ))}         
          </ScrollView>
        </View>
        
      )
  }
  
}

/*const styles = StyleSheet.create({
    fltContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: '#000'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    }
})*/