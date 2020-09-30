import React from 'react';
import { Icon } from 'react-native-elements';

const headerLeft = navigation => () => (
  <Icon
    name="menu"
    size={24}
    style={{
      padding: 16,
      color: '#88c9bf',
    }}
    onPress={function () {
      navigation.toogleDrawer();
    }}
  />
);

const greenHeader = (title: string) => ({
  title,
  headerTintColor: '#434343',
  headerStyle: {
    backgroundColor: '#88c9bf',
  },
});

export { headerLeft, greenHeader };
