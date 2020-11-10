import * as React from 'react';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';
import AuthContext from '../firebase/auth.context';
import { theme } from './theme';

const Back = styled.View`
  height: 150px;
  background-color: ${theme.colors.primary};
`;

export default function Avatar() {
  const auth = React.useContext(AuthContext);
  return (
    <Back>
      <Text>{auth?.profile.username}</Text>
    </Back>
  );
}
