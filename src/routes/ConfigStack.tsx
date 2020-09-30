import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Config from '../screens/config';
import { greenHeader } from './stack-util';

const Stack = createStackNavigator();

export const configRoutes = {
  label: 'Configurações',
  icon: 'folder',
  children: [
    {
      label: 'Privacidade',
      title: 'Privacidade',
      name: Config.name,
      component: Config,
    },
  ],
};

export default function ConfigStack({ navigation }) {
  const first = configRoutes.children[0];
  return (
    <Stack.Navigator initialRouteName={first.name}>
      {configRoutes.children.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={greenHeader(route.title)}
        />
      ))}
    </Stack.Navigator>
  );
}
