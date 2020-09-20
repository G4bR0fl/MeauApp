import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routing from './src/routes/routes';

export default function App() {
  return (
	<NavigationContainer>
		<Routing />
	</NavigationContainer>
  );
}

