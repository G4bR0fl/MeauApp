import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import styled from 'styled-components/native';
import { Api } from '../../firebase/api';
import Animal from '../../firebase/models/Animal';

const BigTitle = styled.Text`
  font-family: 'Courgette_400Regular';
  font-size: 72px;
  margin-top: 56px;
  margin-bottom: 52px;
  text-align: center;
  color: #88c9bf;
`;

export default function PetRegisterSucess() {
  function onSubmit(data: Animal) {
    Api.Database.createPet(data);
  }

  return (
    <View>
      <BigTitle>Oba!</BigTitle>
      <Text style={{ fontFamily: 'Roboto_400Regular' }}>
        O cadastro do seu pet foi realizado com sucesso!
      </Text>
      <Text style={{ fontFamily: 'Roboto_400Regular' }}>
        Certifique-se que permitiu o envio de notificações por push no campo
        privacidade do menu de configurações do aplicativo. Assim, podemos te
        avisar assim que alguem interessado entrar em contato!
      </Text>

      <Button mode="contained">Meus Pets</Button>
    </View>
  );
}
