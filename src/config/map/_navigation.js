import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './_screens/HomeScreen'

const Screens = {
  Home: HomeScreen
}

export default createDrawerNavigator(Screens)
