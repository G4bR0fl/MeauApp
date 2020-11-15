import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { invertedTheme, theme } from '../components/theme';

const headerLeft = navigation => () => (
  <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <Icon
      name="menu"
      size={24}
      style={{
        padding: 16,
        color: '#88c9bf',
      }}
    />
  </TouchableOpacity>
);

const greenHeader = (title: string | undefined) => ({
  title,
  headerTintColor: '#434343',
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
});

const drawerTheme = (route: any, navigation: any) => ({
  title: route.title,
  headerTintColor: '#434343',
  headerStyle: {
    backgroundColor: theme.colors.primary,
    headerLeft: headerLeft(navigation),
  },
});

const yellowHeader = (title: string | undefined) => ({
  title,
  headerTintColor: '#434343',
  headerStyle: {
    backgroundColor: invertedTheme.colors.primary,
  },
});

export { headerLeft, greenHeader, yellowHeader };
