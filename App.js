import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './components/navigators/MainNavigator'


export default function App() {

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
