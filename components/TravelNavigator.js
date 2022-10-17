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
            headerStyle: {backgroundColor: '#031073'},
            headerTitleStyle: {color: '#edeff5'},
            title: "Find a journey",
            headerTitle: "Find a journey"
          }}
        />
        <Stack.Screen 
          name="TravelList" 
          component={TravelList}
          options={{
            headerStyle: {backgroundColor: '#031073'},
            headerTitleStyle: {color: '#edeff5'},
            title: "Flight list",
            headerTitle: "Flight list"
          }}
        />
        <Stack.Screen 
          name="TravelMap"
          component={MapScreen}
          options={{
            headerStyle: {backgroundColor: '#031073'},
            headerTitleStyle: {color: '#edeff5'},
            title: "Map",
            headerTitle: "Map"
          }}
        />
    </Stack.Navigator>
  )
}