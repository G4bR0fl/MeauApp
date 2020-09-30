import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import InfoAdoptionHistories from '../screens/infoAdoptionHistories';
import InfoEvents from '../screens/infoEvents';
import InfoLegislation from '../screens/infoLegislation';
import InfoTips from '../screens/infoTips';
import InfoAdoption from '../screens/petHelp';
import { headerLeft } from './stack-util';

const Stack = createStackNavigator();

export const profileRoutes = {
  label: 'Informações',
  icon: 'folder',
  children: [
    {
      label: 'Dicas',
      title: 'Dicas',
      name: InfoTips,
      component: InfoTips.name,
    },
    {
      label: 'Eventos',
      title: 'Eventos',
      name: InfoEvents.name,
      component: InfoEvents,
    },
    {
      label: 'Legislação',
      title: 'Legislação',
      name: InfoLegislation.name,
      component: InfoLegislation,
    },
    {
      label: 'Termo de Adoção',
      title: 'Termo de Adoção',
      name: InfoAdoption.name,
      component: InfoAdoption,
    },
    {
      label: 'Histórias de Adoção',
      title: 'Histórias de Adoção',
      name: InfoAdoptionHistories.name,
      component: InfoAdoptionHistories,
    },
  ],
};

export default function InformationsStack({ navigation }) {
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
          headerLeft,
        }}
      />
    </Stack.Navigator>
  );
}
