import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'


import Home from './src/screens/home';
import profileRegister from './src/screens/profileRegister';

const Stack = createStackNavigator();

let data = [{
	value: 'Banana',
}, {
	value: 'Mango',
}, {
	value: 'Pear',
}];	

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