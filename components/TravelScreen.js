import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from '../Styles'

export default function TravelScreen({navigation}) {

  const [airport, setAirport] = useState('')

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Departing flights</Text>
        <Text style={styles.formTitle}>Type in the airport IATA code</Text>
        <TextInput style={styles.inputField} placeholder="eg. HEL, OUL, KUO, TMP, TKU" onChangeText={text => setAirport(text)}/>
        <Button title="Submit" onPress={() => navigation.navigate('TravelList', {airport : airport})}/>
    </View>
  )
}