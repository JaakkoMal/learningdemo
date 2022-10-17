import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TravelScreen from './TravelScreen'
import TravelList from './TravelList'
import MapScreen from './MapScreen'

export default function TravelNavigator() {

    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="TravelScreen">
        <Stack.Screen
          name="TravelScreen"
          component={TravelScreen}
          options={{
            title: "Find a journey",
            headerTitle: "Find a journey"
          }}
        />
        <Stack.Screen 
          name="TravelList" 
          component={TravelList}
          options={{
            title: "Flight list",
            headerTitle: "Flight list"
          }}
        />
        <Stack.Screen 
          name="TravelMap"
          component={MapScreen}
          options={{
            title: "Map",
            headerTitle: "Map"
          }}
        />
    </Stack.Navigator>
  )
}