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
            title: "Flight routes",
            headerTitle: "Flight routes"
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
            title: "Destination on map",
            headerTitle: "Destination on map"
          }}
        />
    </Stack.Navigator>
  )
}