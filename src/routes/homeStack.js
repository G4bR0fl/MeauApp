import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-nagivation'
import Home from '../screens/home' ;
import profileRegister from '../screens/profileRegister';

const screens = {
    Home: {
        screen: Home
    },
    profileRegister: {
        screen: profileRegister
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);