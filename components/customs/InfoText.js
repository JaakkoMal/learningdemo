import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles'

export default function InfoText() {
  return (
    <View>
      <Text style={[styles.formTitle, {marginLeft: 0}]}>Searching a route</Text>
      <Text style={styles.flightInfoText}>Type in an IATA code of any Finavia airport to see airport specific departures or leave the field empty to see departures from all Finavia airports.</Text>
      <Text style={[styles.formTitle, {marginLeft: 0}]}>Manage favorite flight routes</Text>
      <Text style={styles.flightInfoText}>From the list of flights add flight routes to favorites to be displayed on the list on this screen. Remove routes from favorites by pressing 'remove'.</Text>
      <Text style={styles.flightInfoText}>See your favorite route on a map by pressing the route on the list.</Text>
    </View>
  )
}