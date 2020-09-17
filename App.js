import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

import Home from './src/screens/home';
import profileRegister from './src/screens/profileRegister';
import loginError from './src/screens/loginError';

const Stack = createStackNavigator();

export default function App() {
  return (
	  
	<NavigationContainer>
		
		<Stack.Navigator>
			<Stack.Screen 
				name="Home"
				component={Home}
			/>
			<Stack.Screen 
				name="profileRegister"
				component={profileRegister}
				options={{ 
					title: 'Cadastro Pessoal',
					headerStyle: {
						backgroundColor: '#cfe9e5',
					},
					headerLeft: () => (
						<Icon 
							name='menu' 
							size={24}
							style={{padding:16, color:'#464646'}}
						/>
					),
				}}
			/>
			<Stack.Screen 
				name="loginError"
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

	</NavigationContainer>
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