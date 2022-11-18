import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import TicTacToe from '../screens/TicTacToe'
import TravelNavigator from './TravelNavigator'

export default function MainNavigator() {

  const TabStack = createBottomTabNavigator();  

  return (
    <TabStack.Navigator>
      <TabStack.Screen 
        name='Flight routes' 
        component={TravelNavigator}
        options={{
          headerStyle: {backgroundColor: '#031073'},
          headerTitleStyle: {color: '#edeff5'},
          tabBarStyle: {backgroundColor: '#031073'},
          headerShown: false,
          tabBarIcon: () => (
            <Entypo name='globe' size={24} color='#edeff5' />
          )
        }} />
        <TabStack.Screen 
        name='TicTacToe' 
        component={TicTacToe}
        options={{
          headerStyle: {backgroundColor: '#031073'},
          headerTitleStyle: {color: '#edeff5'},
          tabBarStyle: {backgroundColor: '#031073'},
          tabBarLabel: 'TicTacToe',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='grid' size={24} color='#edeff5' />
          )
        }} />
      </TabStack.Navigator>
  )
}