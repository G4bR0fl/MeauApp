import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Icon } from 'react-native-elements';
import Login from '../screens/login';
import loginError from '../screens/loginError';
import profileRegister from '../screens/profileRegister';

const Stack = createStackNavigator();

export default function CadastroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={profileRegister.name}
        component={profileRegister}
        options={{
          title: 'Cadastro Pessoal',
          headerStyle: {
            backgroundColor: '#cfe9e5',
          },
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              style={{ padding: 16, color: '#464646' }}
            />
          ),
        }}
      />

      <Stack.Screen
        name={Login.name}
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#cfe9e5',
          },
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              style={{ padding: 16, color: '#464646' }}
            />
          ),
        }}
      />
      <Stack.Screen
        name={loginError.name}
        component={loginError}
        options={{
          title: 'Cadastro',
          headerTintColor: '#434343',
          headerStyle: {
            backgroundColor: '#88c9bf',
          },
        }}
      />
    </Stack.Navigator>
  );
}
