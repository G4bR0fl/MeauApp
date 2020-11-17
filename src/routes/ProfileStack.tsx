import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/theme';
import Home from '../screens/home';
import ProfileChat from '../screens/profileChat';
import ProfileFavorites from '../screens/profileFavorites';
import ProfilePets from '../screens/profilePets';
import ProfileUser from '../screens/profileUser';
import { greenHeader, headerLeft as drawerButton } from './stack-util';

const Stack = createStackNavigator();

export const profileRoutes = {
  label: 'Profile',
  icon: 'folder',
  name: ProfileStack.name,
  children: [
    {
      label: 'Meu perfil',
      title: 'UserName',
      name: ProfileUser.name,
      component: ProfileUser,
    },
    {
      label: 'Meus pets',
      title: 'Meus pets',
      name: ProfilePets.name,
      component: ProfilePets,
    },
    {
      label: 'Favoritos',
      title: 'Favoritos',
      name: ProfileFavorites.name,
      component: ProfileFavorites,
    },
    {
      label: 'Chat',
      title: 'Chat',
      name: ProfileChat.name,
      component: ProfileChat,
    },
  ],
};

export default function ProfileStack({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Stack.Navigator initialRouteName={Home.name}>
          <Stack.Screen
            name={Home.name}
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: 'white',
              },
              headerLeft: drawerButton(navigation),
            }}
          />
          {profileRoutes.children.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={greenHeader(route.title)}
            />
          ))}
        </Stack.Navigator>
      </ThemeProvider>
    </PaperProvider>
  );
}
