import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import { headerLeft as drawerButton } from './stack-util';

const Stack = createStackNavigator();

export default function UsuarioStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={Home.name}>
      <Stack.Screen
        name={Home.name}
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: drawerButton(navigation),
        }}
      />
    </Stack.Navigator>
  );
}
