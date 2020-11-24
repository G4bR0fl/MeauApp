import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Animal } from '../../backend/models/Animal';
import { BigTitle, CommonText } from '../components/BigTitle';

export default function PetRemove({ navigation, route }) {
  const data = route.params.detail as Animal;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#589b9b" />
      <BigTitle>Pronto!</BigTitle>
      <CommonText>
        O {data.nome} foi removido da nossa lista com sucesso!
      </CommonText>
      <CommonText>
        Porém, as conversas relacionadas à ele serão mantidas para o caso de
        você desejar manter contato. Caso deseje apagá-las, você pode realizar
        esta ação nas configurações no chat dos usuários relacionados à este
        pet.
      </CommonText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  registerButton: {
    backgroundColor: '#88c9bf',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 260,
    height: 50,
    marginTop: 16,
    marginBottom: 42,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#e6e6df',
  },
});
