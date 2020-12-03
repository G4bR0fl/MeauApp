import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import AuthContext from '../components/auth/auth.context';
import { CustomDrawerContent } from '../components/DrawerContent';
import Login from '../screens/login';
import AtalhosStack from './AtalhosStack';
import ConfigStack from './ConfigStack';
import InformationsStack from './InformationsStack';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const loginOptions = { headerShown: false };

export function Router() {
  const auth = React.useContext(AuthContext);

  return !!auth ? (
    <Drawer.Navigator
      initialRouteName={ProfileStack.name}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name={ProfileStack.name}
        component={ProfileStack}
        options={loginOptions}
      />
      <Drawer.Screen
        name={AtalhosStack.name}
        component={AtalhosStack}
        options={loginOptions}
      />
      <Drawer.Screen
        name={InformationsStack.name}
        component={InformationsStack}
        options={loginOptions}
      />
      <Drawer.Screen name={ConfigStack.name} component={ConfigStack} />
    </Drawer.Navigator>
  ) : (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} options={loginOptions} />
      </Stack.Navigator>
    </>
  );
}
