import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as React from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import { routes } from '../routes/drawer';
import { theme } from './theme';

const Avatar = styled.View`
  height: 150px;
  background-color: ${theme.colors.primary};
`;

export function CustomDrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>
) {
  return (
    <DrawerContentScrollView {...props}>
      <Avatar></Avatar>
      {routes.map(item => (
        <List.Accordion
          title={item.label}
          key={item.label + '-root'}
          left={props => <List.Icon {...props} icon="folder" />}
        >
          {item.children.map(child => (
            <List.Item title={child.title} key={child.title + '-root'} />
          ))}
        </List.Accordion>
      ))}
    </DrawerContentScrollView>
  );
}
