import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { invertedTheme } from '../components/theme';
import PetDetail from '../screens/petAdopt';
import PetAdoption from '../screens/petAdoption';
import PetHelp from '../screens/petHelp';
import PetPatronize from '../screens/petPatronize';
import PetRegister from '../screens/petRegister/petRegister';
import profileRegister from '../screens/profileRegister';
import { headerLeft as drawerButton, yellowHeader } from './stack-util';

const Stack = createStackNavigator();

export const atalhosRoutes = {
  label: 'Atalhos',
  icon: 'folder',
  name: AtalhosStack.name,
  children: [
    {
      label: 'Cadastrar um pet',
      title: 'Cadastro do Animal',
      name: PetRegister.name,
      component: PetRegister,
    },
    {
      label: 'Adotar um pet',
      title: 'Adotar',
      name: PetAdoption.name,
      component: PetAdoption,
    },
    {
      label: 'Ajudar um pet',
      title: 'Ajudar',
      name: PetHelp.name,
      component: PetHelp,
    },
    {
      label: 'Apadinhar um pet',
      title: 'Apadinhar',
      name: PetPatronize.name,
      component: PetPatronize,
    },
    {
      label: 'Cadastrar perfil',
      title: 'Perfil',
      name: profileRegister.name,
      component: profileRegister,
    },
  ],
};

const hiddentRoutes = [
  {
    title: undefined,
    name: PetDetail.name,
    component: PetDetail,
    header: yellowHeader,
  },
];

export default function AtalhosStack({ navigation }) {
  return (
    <PaperProvider theme={invertedTheme}>
      <ThemeProvider theme={invertedTheme}>
        <Stack.Navigator initialRouteName={PetAdoption.name}>
          {atalhosRoutes.children.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={{
                ...yellowHeader(route.title),
                headerLeft: drawerButton(navigation),
              }}
            />
          ))}
          {hiddentRoutes.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={route.header(route.title)}
            />
          ))}
        </Stack.Navigator>
      </ThemeProvider>
    </PaperProvider>
  );
}
