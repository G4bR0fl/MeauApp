import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as React from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Api } from '../../backend/firebase/api';
import { atalhosRoutes } from '../routes/AtalhosStack';
import { configRoutes } from '../routes/ConfigStack';
import { infoRoutes } from '../routes/InformationsStack';
import DrawerAvatar from './DrawerAvatar';

export const routes = [atalhosRoutes, infoRoutes, configRoutes];

const LogoutButton = styled.Button`
  width: 100%;
`;

export function CustomDrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>
) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerAvatar navigation={props.navigation} />
      {routes.map(item => (
        <List.Accordion
          title={item.label}
          key={item.label + '-root'}
          left={props => <List.Icon {...props} icon={item.icon} />}
        >
          {item.children.map(child => (
            <List.Item
              title={child.label}
              key={child.label + '-root'}
              onPress={() =>
                props.navigation.navigate(item.name, { screen: child.name })
              }
            />
          ))}
        </List.Accordion>
      ))}
      <LogoutButton title={'Sair'} onPress={Api.Auth.signOut} />
    </DrawerContentScrollView>
  );
}
