import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import UsuarioStack from './UsuarioStack';

const DrawerNav = createDrawerNavigator();

export function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName={UsuarioStack.name}>
      <DrawerNav.Screen name={UsuarioStack.name} component={UsuarioStack} />
    </DrawerNav.Navigator>
  );
}
