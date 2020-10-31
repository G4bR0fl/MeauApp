import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { BigTitle } from '../../components/BigTitle';
import { Api } from '../../firebase/api';
import Animal from '../../firebase/models/Animal';

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
