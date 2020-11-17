import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import InfoAdoptionHistories from '../screens/infoAdoptionHistories';
import InfoEvents from '../screens/infoEvents';
import InfoLegislation from '../screens/infoLegislation';
import InfoTips from '../screens/infoTips';
import InfoAdoption from '../screens/petHelp';
import { greenHeader } from './stack-util';

const Stack = createStackNavigator();

export const infoRoutes = {
  label: 'Informações',
  icon: 'folder',
  name: InformationsStack.name,
  children: [
    {
      label: 'Dicas',
      title: 'Dicas',
      name: InfoTips.name,
      component: InfoTips,
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
  const first = infoRoutes.children[0];
  return (
    <Stack.Navigator initialRouteName={first.name}>
      {infoRoutes.children.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={greenHeader(route.title)}
        />
      ))}
    </Stack.Navigator>
  );
}
