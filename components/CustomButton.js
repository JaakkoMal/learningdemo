import { View, Text } from 'react-native'
import React from 'react'
import styles from '../Styles'

export default function CustomButton({buttonText, pressed}) {
  return (
    <View style={[styles.customButton, pressed && {backgroundColor: '#000000'}]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  )
}