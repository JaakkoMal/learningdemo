import { View, Text, TextInput, Modal, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from '../Styles'
import CustomButton from './CustomButton'
import InfoButton from './InfoButton'

export default function TravelScreen({navigation}) {

  const [airport, setAirport] = useState('')
  const [showInfo, setShowInfo] = useState(false)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Departing flights</Text>
        <Text style={styles.formTitle}>Type in the airport IATA code</Text>
        <TextInput style={styles.inputField} placeholder="eg. HEL, OUL, KUO, TMP, TKU" onChangeText={text => setAirport(text)}/>
        {/*<Button title="Submit" onPress={() => navigation.navigate('TravelList', {airport : airport})}/>*/}
        <Pressable onPress={() => navigation.navigate('TravelList', {airport : airport})}>
            {(state) => <CustomButton pressed={state.pressed} buttonText="Show flights"/>}
        </Pressable>
        <Pressable onPress={() => setShowInfo(true)}>
          {(state) => <InfoButton pressed={state.pressed} />}
        </Pressable>
        <Modal
          animationType='slide'
          transparent={true}
          visible={showInfo}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.flightInfoText}>
                Type in the IATA code of a Finavia airport to see scheduled departing flights for the day or leave the field empty to see all departing flights from all Finavia airports for the day.
              </Text>
              <Pressable style={styles.modalCloseButton} onPress={() => setShowInfo(!showInfo)}>
                <Text style={styles.modalCloseButtonText}>close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
  )
}