import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

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

const greenHeader = (title: string) => ({
  title,
  headerTintColor: '#434343',
  headerStyle: {
    backgroundColor: '#88c9bf',
  },
});

export { headerLeft, greenHeader };
