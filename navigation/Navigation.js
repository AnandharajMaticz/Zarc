import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../src/screens/Home';
import TabNavigator from './TabNavigator';
import Login from '../src/screens/Login';

const screens = {
  Login:{
screen: Login
  },
  Home: {
    screen: TabNavigator,
  },
};

const NavigationStack = createStackNavigator(screens, {
  headerMode: 'none',
});

export default createAppContainer(NavigationStack);
