import React from 'react';
import { StatusBar } from 'react-native';
import { Animal } from '../../backend/models/Animal';
import { BigTitle, CommonText } from '../components/BigTitle';
import { Container } from '../components/layout';

export default function PetRemove({ navigation, route }) {
  const data = route.params.detail as Animal;
  return (
    <Container>
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
    </Container>
  );
}
