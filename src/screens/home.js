import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import petRegister from './petRegister';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Page dos homi</Text>
      <Button title="Profile Registration" onPress={() => navigation.navigate('profileRegister')} />
      <Button title="Pet Registration" onPress={() => navigation.navigate(petRegister.name)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});