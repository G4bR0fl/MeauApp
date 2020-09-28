import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as React from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import { theme } from './theme';

const Avatar = styled.View`
  height: 150px;
  background-color: ${theme.colors.primary};
`;

export function CustomDrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>
) {
  const [name, setName] = React.useState('Emile Caterine');
  return (
    <DrawerContentScrollView {...props}>
      <Avatar></Avatar>
      <List.Section title="Accordions">
        <List.Accordion
          title={name}
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </DrawerContentScrollView>
  );
}
