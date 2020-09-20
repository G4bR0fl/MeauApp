import React from 'react';
import Home from "../screens/home";
import profileRegister from "../screens/profileRegister";
import petRegister from "../screens/petRegister";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from 'react-native-elements'
import loginError from '../screens/loginError';
import { StyleSheet, StatusBar } from 'react-native';
const Stack = createStackNavigator();

export default function Routing() {
  return (
    <Stack.Navigator>

			<Stack.Screen 
				name="Home"
				component={Home}
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
							name='menu' 
							size={24}
							style={{padding:16, color:'#464646'}}
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
      <Stack.Screen name={petRegister.name} component={petRegister} />
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
