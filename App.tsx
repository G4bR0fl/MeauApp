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
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import User from './backend/models/User';
import { Api } from './src/firebase/api';
import AuthContext from './src/firebase/auth.context';
import FirebaseApp from './src/firebase/init';
import { Router } from './src/routes/drawer';
import {
  getPushNotificationToken,
  registerForPushNotifications,
} from './src/setup/notifications';

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [auth, setAuth] = useState<User | null>(null);

  useEffect(() => {
    registerForPushNotifications();

    FirebaseApp.auth().onAuthStateChanged(user => {
      if (user != null) {
        setAuth(user as any);
        getPushNotificationToken(setExpoPushToken);
      } else {
        setAuth(null);
      }
    });
  }, []);

  useEffect(() => {
    if (expoPushToken) {
      Api.Database.Profile.updatePushToken(expoPushToken);
    }
  }, [expoPushToken]);

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
