import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/screens/home';
import profileRegister from './src/screens/profileRegister';

const Stack = createStackNavigator();

export default function App() {
  return (
	  
	<NavigationContainer>
		<StatusBar barStyle="light-content" backgroundColor="#88c9bf" />
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