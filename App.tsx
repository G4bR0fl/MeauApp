import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { Drawer } from './src/routes/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
