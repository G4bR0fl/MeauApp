import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function AppLogo() {
  return (
    <>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 122,
    height: 44,
    alignSelf: 'center',
  },
});
