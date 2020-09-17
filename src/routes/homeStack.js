import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-nagivation'
import Home from '../screens/home';
import profileRegister from '../screens/profileRegister';
import petRegister from '../screens/petRegister';

const screens = {
    Home: {
        screen: Home
    },
    profileRegister: {
        screen: profileRegister
    },
    petRegister: {
        screen: petRegister
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);