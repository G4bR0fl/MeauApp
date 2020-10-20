import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts
} from '@expo-google-fonts/roboto';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native';
import DogCard from '../components/DogCard';
import { theme } from '../components/theme';
import PetAdopt from './petAdopt';

const Stack = createStackNavigator();

export default function PetAdoption({ navigation }) {
  const ButtonBox = styled.View`
    width: 100%;
    padding: 5%;
    justify-content: space-between;
    flex-direction: row;
  `;

  const Title = styled.Text`
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0px;
  `;

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const styles = StyleSheet.create({
    container: {
      margin: 10,
      backgroundColor: '#fafafa',
    },
  });
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ScrollView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#f7a800" />
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(PetAdopt.name);
              }}
            >
              <DogCard />
            </TouchableOpacity>
            <DogCard />
            <DogCard />
            <DogCard />
          </View>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}
