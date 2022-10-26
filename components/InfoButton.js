import { View, Text } from 'react-native'
import React from 'react'
import styles from '../Styles'

export default function CustomButton({pressed}) {
  return (
    <View style={[styles.infoButton, pressed && {backgroundColor: '#000000'}]}>
      <Text style={styles.infoButtonText}>i</Text>
    </View>
  )
}