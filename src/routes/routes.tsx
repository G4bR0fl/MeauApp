import React from 'react';
import Home from "../screens/home";
import profileRegister from "../screens/profileRegister";
import petRegister from "../screens/petRegister";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Routing() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name={profileRegister.name} component={profileRegister} />
      <Stack.Screen name={petRegister.name} component={petRegister} />
    </Stack.Navigator>
  );
}
