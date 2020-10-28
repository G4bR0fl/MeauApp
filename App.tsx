import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import AuthContext from './src/firebase/auth.context';
import FirebaseApp from './src/firebase/init';
import { Router } from './src/routes/drawer';

export default function App() {
  const [auth, setAuth] = useState(undefined);

  FirebaseApp.auth().onAuthStateChanged(user => {
    if (user != null) {
      setAuth(user as any);
    } else {
      setAuth(undefined);
    }
  });

  return (
    <NavigationContainer>
      <AuthContext.Provider value={true}>
        <Router />
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
