import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';

const Stack = createStackNavigator();

export default function UsuarioStack() {
  return (
    <Stack.Navigator initialRouteName={Home.name}>
      <Stack.Screen name={Home.name} component={Home} />
    </Stack.Navigator>
  );
}
