import { View, Text, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { parseString } from 'react-native-xml2js'
import CustomButton from './CustomButton'
import uuid from 'react-native-uuid'
import styles from '../Styles'

const URL = 'https://api.finavia.fi/flights/public/v0/flights/dep/'
const APP_KEY = 'your app key goes here...'
const APP_ID = 'your app id goes here...'
export default function TravelList({navigation, route}) {
    const [flights, setFlights] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(URL + route.params?.airport, {
            method: 'GET',
            headers: {
                'app_id' : APP_ID,
                'app_key' : APP_KEY
            }
        })
        .then(response => response.text())
        .then((responseText) => {
            parseString(responseText, function(err, result){
                setError(null)
                setFlights(result.flights.dep[0].body[0].flight)
                setIsLoaded(true)
            })
        })
        .catch((error) => {
            setError(error)
            setFlights([])
            setIsLoaded(true)
        }) 
    }, [])

  if(error){
    return (
        <View style={styles.container}>
            <Text style={styles.flightInfoTitle}>O'oh, spaghettios!</Text>
            <Text style={styles.flightInfoText}>
                Entered IATA code does not exist or is outside Finland
            </Text>
        </View>
    )
  } else if (!isLoaded){
    return (
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <Text style={styles.flightInfoText}>Retrieving flights...</Text>
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
                    <Text style={styles.flightInfoText}>Departure time: {flight.sdt.toString().slice(11, 19)} UTC</Text>
                    <Text style={styles.flightInfoText}>Aircraft type: {flight.actype}</Text>
                    <Text style={styles.flightInfoText}>Destination: {flight.route_1} / {flight.route_n_1}</Text>
                    <Text style={styles.flightInfoText}>Departure gate: {flight.gate}</Text>
                    <Pressable onPress={() => navigation.navigate('TravelMap', {destination : flight.route_n_1})}>
                        {(state) => <CustomButton pressed={state.pressed} buttonText="Show destination on map"/>}
                    </Pressable>
                    <Pressable onPress={() => route.params?.setFavorite(flight)}>
                        {(state) => <CustomButton pressed={state.pressed} buttonText="Add to favorites" />}
                    </Pressable>
                </View>
            ))}         
          </ScrollView>
        </View>
        
      )
  }
  
}