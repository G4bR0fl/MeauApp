import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { InputLabel } from './InputLabel';

export function PhotoInput() {
  return (
    <>
      <InputLabel>Foto de Perfil</InputLabel>
      <View style={styles.pictureStyle}>
        <Icon name="control-point" style={styles.pictureText} />
        <Text style={styles.pictureText}>adicionar foto</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 14,
    color: '#434343',
    //fontFamily: 'roboto regular', // Testar pra ver se a fonte muda
  },
  pictureStyle: {
    // Consertar detalhes
    width: 128,
    height: 128,
    marginTop: 32,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e7e7',
    borderRadius: 2,
  },
  pictureText: {
    color: '#757575',
  },
});
