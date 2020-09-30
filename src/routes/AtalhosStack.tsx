import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PetRegister from '../screens/petRegister';
import { greenHeader } from './stack-util';

const Stack = createStackNavigator();

const petRegisterRoute = {
  title: 'Cadastro do Animal',
  name: PetRegister.name,
  component: PetRegister,
};

export default function AtalhosStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={petRegisterRoute.name}
        component={petRegisterRoute.component}
        options={greenHeader(petRegisterRoute.title)}
      />
    </Stack.Navigator>
  );
}

export const atalhosRoutes = {
  label: 'Atalhos',
  children: [petRegisterRoute],
};
