import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import ProfileChat from '../screens/profileChat';
import ProfileFavorites from '../screens/profileFavorites';
import ProfilePets from '../screens/profilePets';
import ProfileUser from '../screens/profileUser';
import { headerLeft as drawerButton } from './stack-util';

const Stack = createStackNavigator();

export const profileRoutes = {
  label: 'Profile',
  icon: 'folder',
  children: [
    {
      label: 'Meu perfil',
      title: 'UserName',
      name: ProfileUser,
      component: ProfileUser.name,
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
    <Stack.Navigator initialRouteName={Home.name}>
      <Stack.Screen
        name={Home.name}
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: drawerButton(navigation),
        }}
      />
    </Stack.Navigator>
  );
}
