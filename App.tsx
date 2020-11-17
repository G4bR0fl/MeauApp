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
import { Api } from './backend/firebase/api';
import FirebaseApp from './backend/firebase/init';
import AuthContext, { Session } from './src/components/auth/auth.context';
import { Router } from './src/routes/drawer';
import {
  getPushNotificationToken,
  registerForPushNotifications,
} from './src/setup/notifications';

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [auth, setAuth] = useState<Session | undefined>(undefined);

  useEffect(() => {
    //setup
    registerForPushNotifications();
    Notifications.addNotificationReceivedListener(listener => {
      console.log(listener);
    });
    FirebaseApp.auth().onAuthStateChanged(async authUser => {
      if (authUser != null) {
        getPushNotificationToken(setExpoPushToken);
        Api.Database.Profile.updatePushToken(expoPushToken);
        const currentUser = await Api.Auth.currentUser();
        setAuth(currentUser as any);
      } else {
        setAuth(undefined);
      }
    });
  }, []);

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
