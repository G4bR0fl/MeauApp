import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Api } from '../../../backend/firebase/api';
import BaseAnimal from '../../../backend/models/Animal';
import { Container } from '../../components/layout';
import PetRegisterForm from './form';
import PetRegisterSucess from './sucess';

export default function PetRegister() {
  const [formCompletion, setFormCompletion] = useState(false);

  async function onSubmit(data: BaseAnimal) {
    try {
      Api.Database.Pet.createPet(data);
      setFormCompletion(true);
      console;
    } catch {}
  }

  return (
    <ScrollView>
      <Container>
        {!formCompletion ? (
          <PetRegisterForm onSubmit={onSubmit} />
        ) : (
          <PetRegisterSucess />
        )}
      </Container>
    </ScrollView>
  );
}
