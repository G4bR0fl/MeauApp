import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PetAdoption from '../screens/petAdoption';
import PetHelp from '../screens/petHelp';
import PetPatronize from '../screens/petPatronize';
import PetRegister from '../screens/petRegister';
import { greenHeader } from './stack-util';

const Stack = createStackNavigator();

export const atalhosRoutes = {
  label: 'Atalhos',
  icon: 'folder',
  name: AtalhosStack.name,
  children: [
    {
      label: 'Cadastrar um pet',
      title: 'Cadastro do Animal',
      name: PetRegister.name,
      component: PetRegister,
    },
    {
      label: 'Adotar um pet',
      title: 'Adotar',
      name: PetAdoption.name,
      component: PetAdoption,
    },
    {
      label: 'Ajudar um pet',
      title: 'Ajudar',
      name: PetHelp.name,
      component: PetHelp,
    },
    {
      label: 'Apadinhar um pet',
      title: 'Apadinhar',
      name: PetPatronize.name,
      component: PetPatronize,
    },
  ],
};

export default function AtalhosStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={PetAdoption.name}>
      {atalhosRoutes.children.map(route => (
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
