import React from 'react';
import { Icon } from 'react-native-elements';

const headerLeft = () => (
  <Icon
    name="menu"
    size={24}
    style={{
      padding: 16,
      color: '#88c9bf',
    }}
  />
);

const greenHeader = (title: string) => ({
  title,
  headerTintColor: '#434343',
  headerStyle: {
    backgroundColor: '#88c9bf',
  },
  headerLeft,
});

export { headerLeft, greenHeader };
