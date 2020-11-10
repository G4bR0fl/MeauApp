import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import BaseAnimal from '../../../backend/models/Animal';
import { Container } from '../../components/layout';
import { theme } from '../../components/theme';
import { Api } from '../../firebase/api';
import PetRegisterForm from './form';
import PetRegisterSucess from './sucess';

export default function PetRegister() {
  const [formCompletion, setFormCompletion] = useState(false);

  async function onSubmit(data: BaseAnimal) {
    try {
      Api.Database.createPet(data);
      setFormCompletion(true);
      console;
    } catch {}
  }

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ScrollView>
          <Container>
            {!formCompletion ? (
              <PetRegisterForm onSubmit={onSubmit} />
            ) : (
              <PetRegisterSucess />
            )}
          </Container>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}
