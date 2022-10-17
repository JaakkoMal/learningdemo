import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function TravelScreen({navigation}) {

  const [airport, setAirport] = useState('')

  const checkFlights = () => {
    navigation.navigate('TravelList', {airport : airport})
  }

  return (
    <View>
        <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Type in the airport IATA code</Text>
        <TextInput style={styles.inputField} placeholder="eg. HEL, OUL, KUO, TMP, TKU" onChangeText={text => setAirport(text)}/>
        <Button title="Submit" onPress={checkFlights}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        padding: 20,
    },
    formTitle: {
        fontSize: 24,
        marginBottom: 20
    },
    inputField: {
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 10
    }
})