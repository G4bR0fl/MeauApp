import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import styled, { ThemeProvider } from 'styled-components/native';
import DogCard from '../components/DogCard';
import { invertedTheme } from '../components/theme';
import { Api } from '../firebase/api';

const Stack = createStackNavigator();

export default function PetAdoption({ navigation }) {
  const [list, setList] = useState([])

  useEffect(() => {
    Api.Database.Pet.listAdoption().then(res => setList(res))
  }, [])

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

  const styles = StyleSheet.create({
    container: {
      margin: 10,
      backgroundColor: '#fafafa',
    },
  });
  return (
    <PaperProvider theme={invertedTheme}>
      <ThemeProvider theme={invertedTheme}>
        <ScrollView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#f7a800" />
          <View>
            {
              list?.map(item => <DogCard value={item} />)
            }
          </View>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}
