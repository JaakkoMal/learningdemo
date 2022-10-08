import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import HomeScreen from './components/HomeScreen'
import TicTacToe from './components/TicTacToe'
import MapScreen from './components/MapScreen'

export default function App() {

  const Stack = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Entypo name='home' size={24} />
          )
        }} />
        <Stack.Screen 
        name='TicTacToe' 
        component={TicTacToe}
        options={{
          tabBarLabel: 'TicTacToe',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='grid' size={24} />
          )
        }} />
        <Stack.Screen 
        name='Map' 
        component={MapScreen}
        options={{
          tabBarLabel: 'Me on map',
          tabBarIcon: () => (
            <Entypo name='globe' size={24} />
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
