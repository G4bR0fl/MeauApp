import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import profileRegister from './src/screens/profileRegister';

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