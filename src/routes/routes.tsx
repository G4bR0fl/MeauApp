import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Home from '../screens/home';
import Login from '../screens/login';
import loginError from '../screens/loginError';
import petRegister from '../screens/petRegister';
import profileRegister from '../screens/profileRegister';
import Term from '../screens/term';
import termError from '../screens/termError';
const Stack = createStackNavigator();

const greenHeader = (title: string) => ({
  title,
  headerTintColor: '#434343',
  headerStyle: {
    backgroundColor: '#88c9bf',
  },
});

export default function Routing() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Home.name}
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              style={{
                padding: 16,
                color: '#88c9bf',
              }}
            />
          ),
        }}
      />
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
      <Stack.Screen
        name={petRegister.name}
        component={petRegister}
        options={greenHeader('Cadastro do Animal')}
      />
      <Stack.Screen
        name={Term.name}
        component={Term}
        options={{
          title: 'Termo de adoção',
          headerStyle: {
            backgroundColor: '#88c9bf',
          },
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              style={{ padding: 16, color: '#464646' }}
            />
          ),
          headerTintColor: '#434343',
        }}
      />

      <Stack.Screen
        name={termError.name}
        component={termError}
        options={{
          title: 'Termo de adoção',
          headerStyle: {
            backgroundColor: '#cfe9e5',
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
