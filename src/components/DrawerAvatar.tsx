import * as React from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import { profileRoutes } from '../routes/ProfileStack';
import AuthContext from './auth/auth.context';
import { theme } from './theme';

const Box = styled.View`
  width: 100%;
  height: 170px;
  background-color: ${theme.colors.primary};
  padding-left: 16px;
`;

const UserImage = styled.Image`
  width: 64px;
  height: 64px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 64px;
`;

const UserName = styled.Text`
  font-size: 14px;
  font-family: 'Roboto_500Medium';
`;

export default function DrawerAvatar({ navigation }: { navigation?: any }) {
  const auth = React.useContext(AuthContext);
  return (
    <>
      <Box>
        <UserImage source={{ uri: auth?.profile.photo }} />
      </Box>
      <List.Accordion
        title={auth?.profile.name}
        key={profileRoutes.label + '-root'}
        style={{
          backgroundColor: theme.colors.primary,
        }}
        left={props => <List.Icon {...props} icon={profileRoutes.icon} />}
      >
        {profileRoutes.children.map(child => (
          <List.Item
            title={child.label}
            key={child.label + '-root'}
            onPress={() =>
              navigation.navigate(profileRoutes.name, {
                screen: child.name,
              })
            }
          />
        ))}
      </List.Accordion>
    </>
  );
}
