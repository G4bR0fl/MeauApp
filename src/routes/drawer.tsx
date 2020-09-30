import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { CustomDrawerContent } from '../components/DrawerContent';
import AtalhosStack, { atalhosRoutes } from './AtalhosStack';
import ConfiguracoesStack from './ConfiguracoesStack';
import InformacoesStack from './InformacoesStack';
import UsuarioStack from './UsuarioStack';

const Drawer = createDrawerNavigator();

export function Router() {
  return (
    <Drawer.Navigator
      initialRouteName={UsuarioStack.name}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name={UsuarioStack.name} component={UsuarioStack} />
      <Drawer.Screen name={AtalhosStack.name} component={AtalhosStack} />
      <Drawer.Screen
        name={InformacoesStack.name}
        component={InformacoesStack}
      />
      <Drawer.Screen
        name={ConfiguracoesStack.name}
        component={ConfiguracoesStack}
      />
    </Drawer.Navigator>
  );
}

export const routes = [atalhosRoutes];
