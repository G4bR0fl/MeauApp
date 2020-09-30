import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { CustomDrawerContent } from '../components/DrawerContent';
import AtalhosStack from './AtalhosStack';
import ConfiguracoesStack from './ConfiguracoesStack';
import InformationsStack from './InformationsStack';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

export function Router() {
  return (
    <Drawer.Navigator
      initialRouteName={ProfileStack.name}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name={ProfileStack.name} component={ProfileStack} />
      <Drawer.Screen name={AtalhosStack.name} component={AtalhosStack} />
      <Drawer.Screen
        name={InformationsStack.name}
        component={InformationsStack}
      />
      <Drawer.Screen
        name={ConfiguracoesStack.name}
        component={ConfiguracoesStack}
      />
    </Drawer.Navigator>
  );
}
