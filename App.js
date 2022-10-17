import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import HomeScreen from './components/HomeScreen'
import TicTacToe from './components/TicTacToe'
import TravelNavigator from './components/TravelNavigator'

export default function App() {

  const TabStack = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <TabStack.Navigator>
        <TabStack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Entypo name='home' size={24} />
          )
        }} />
        <TabStack.Screen 
        name='TicTacToe' 
        component={TicTacToe}
        options={{
          tabBarLabel: 'TicTacToe',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='grid' size={24} />
          )
        }} />
        <TabStack.Screen 
        name='Travel' 
        component={TravelNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Entypo name='globe' size={24} />
          )
        }} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}
