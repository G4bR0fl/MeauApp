import { Courgette_400Regular } from '@expo-google-fonts/courgette';
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import AuthContext from './src/firebase/auth.context';
import FirebaseApp from './src/firebase/init';
import { Router } from './src/routes/drawer';
import { registerForPushNotificationsAsync } from './src/setup/notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    FirebaseApp.auth().onAuthStateChanged(user => {
      if (user != null) {
        setAuth(user as any);
      } else {
        setAuth(undefined);
      }
    });

    registerForPushNotificationsAsync(setExpoPushToken);
  }, []);

  const [auth, setAuth] = useState(undefined);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
    Courgette_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthContext.Provider value={auth}>
        <Router />
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
